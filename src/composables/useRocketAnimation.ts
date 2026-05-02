import { ref, onMounted, onUnmounted } from 'vue';

export function useRocketAnimation() {
  const sceneRef = ref<HTMLDivElement | null>(null);
  const canvasRef = ref<HTMLCanvasElement | null>(null);
  const rocketRef = ref<SVGSVGElement | null>(null);
  const flameRef = ref<SVGGElement | null>(null);
  const jackRef = ref<HTMLSpanElement | null>(null);
  const launched = ref(false);

  let ctx: CanvasRenderingContext2D | null = null;
  let trail: { x: number; y: number }[] = [];

  function resizeCanvas() {
    if (!canvasRef.value || !sceneRef.value) return;
    canvasRef.value.width = sceneRef.value.offsetWidth;
    canvasRef.value.height = sceneRef.value.offsetHeight;
  }

  // Rocket SVG is 22px wide, viewBox 24x40
  // Fin/leg tips are at viewBox y≈30, so legs are at (30/40) of rendered height from SVG top
  const ROCKET_WIDTH = 22;
  const ROCKET_HEIGHT = ROCKET_WIDTH * (40 / 24);
  const LEG_OFFSET = ROCKET_HEIGHT * (30 / 40);

  function getJPosition() {
    if (!sceneRef.value || !jackRef.value) return { x: 0, y: 0 };
    const sceneRect = sceneRef.value.getBoundingClientRect();
    const jackRect = jackRef.value.getBoundingClientRect();
    return {
      // Center on the J's top serif
      x: jackRect.left - sceneRect.left + 10,
      // Nudge down to align legs with the serif surface
      y: jackRect.top - sceneRect.top + 20,
    };
  }

  function easeInOutQuart(t: number): number {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  function cubicBezier(p0: number, p1: number, p2: number, p3: number, t: number): number {
    const mt = 1 - t;
    return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3;
  }

  function cubicBezierDerivative(p0: number, p1: number, p2: number, p3: number, t: number): number {
    const mt = 1 - t;
    return 3 * mt * mt * (p1 - p0) + 6 * mt * t * (p2 - p1) + 3 * t * t * (p3 - p2);
  }

  function drawTrail(alpha = 1) {
    if (!ctx || !canvasRef.value) return;
    ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
    for (let i = 1; i < trail.length; i++) {
      const p = trail[i - 1];
      const q = trail[i];
      ctx.beginPath();
      ctx.strokeStyle = `rgba(59,130,246,${(i / trail.length) * 0.35 * alpha})`;
      ctx.lineWidth = (i / trail.length) * 1.5;
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(q.x, q.y);
      ctx.stroke();
    }
  }

  function fadeTrail() {
    let alpha = 1;
    function fade() {
      alpha -= 0.02;
      if (alpha > 0) {
        drawTrail(alpha);
        requestAnimationFrame(fade);
      } else if (ctx && canvasRef.value) {
        ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
      }
    }
    requestAnimationFrame(fade);
  }

  function launch() {
    if (launched.value || !sceneRef.value || !rocketRef.value || !flameRef.value) return;
    launched.value = true;
    flameRef.value.setAttribute('opacity', '1');

    const scene = sceneRef.value;
    const rocket = rocketRef.value;
    const flame = flameRef.value;

    // Start at the horizon line (bottom of scene), at the leg contact point
    const start = { x: scene.offsetWidth / 2, y: scene.offsetHeight };
    const end = getJPosition();

    const ctrl1 = {
      x: start.x,
      y: start.y - scene.offsetHeight * 1.4,
    };
    const ctrl2 = {
      x: end.x,
      y: end.y - scene.offsetHeight * 1.2,
    };

    const totalDuration = 5000;
    const maxTilt = 18;
    let startTime: number | null = null;
    trail = [];

    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const raw = Math.min((ts - startTime) / totalDuration, 1);
      const t = easeInOutQuart(raw);

      const bx = cubicBezier(start.x, ctrl1.x, ctrl2.x, end.x, t);
      const by = cubicBezier(start.y, ctrl1.y, ctrl2.y, end.y, t);

      // Subtle tilt following the tangent, clamped to maxTilt
      const dtx = cubicBezierDerivative(start.x, ctrl1.x, ctrl2.x, end.x, t);
      const dty = cubicBezierDerivative(start.y, ctrl1.y, ctrl2.y, end.y, t);
      const rawAngle = Math.atan2(dtx, -dty) * 180 / Math.PI;
      let angle = Math.max(-maxTilt, Math.min(maxTilt, rawAngle));

      // Fade rotation to 0 in the last 30% for vertical landing
      if (raw > 0.7) {
        angle *= 1 - (raw - 0.7) / 0.3;
      }

      rocket.style.left = `${bx}px`;
      rocket.style.top = `${by - LEG_OFFSET}px`;
      rocket.style.bottom = 'auto';
      rocket.style.transform = `translateX(-50%) rotate(${angle}deg)`;

      if (raw > 0.5) {
        flame.setAttribute('opacity', (0.25 + Math.random() * 0.45).toString());
      }

      trail.push({ x: bx, y: by });
      if (trail.length > 70) trail.shift();

      drawTrail();

      if (raw < 1) {
        requestAnimationFrame(animate);
      } else {
        flame.setAttribute('opacity', '0');
        rocket.style.left = `${end.x}px`;
        rocket.style.top = `${end.y - LEG_OFFSET}px`;
        rocket.style.transform = 'translateX(-50%) rotate(0deg)';
        fadeTrail();
      }
    }

    requestAnimationFrame(animate);
  }

  onMounted(() => {
    if (canvasRef.value) {
      ctx = canvasRef.value.getContext('2d');
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', resizeCanvas);
  });

  return {
    sceneRef,
    canvasRef,
    rocketRef,
    flameRef,
    jackRef,
    launched,
    launch,
  };
}