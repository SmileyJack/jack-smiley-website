<template>
  <div class="page">
    <section class="hero">
      <div class="hero-text">
        <h1 class="name">
          <span ref="jackRef">Jack </span>
          <span class="accent">Smiley.</span>
        </h1>
        <ContactIcons />
      </div>

      <div ref="sceneRef" class="scene">
        <canvas ref="canvasRef"></canvas>

        <svg
          ref="rocketRef"
          class="rocket"
          viewBox="0 0 24 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2 C12 2 18 10 18 22 L12 26 L6 22 C6 10 12 2 12 2Z"
            fill="#E5E5E5"
            stroke="#3B3B3B"
            stroke-width="0.5"
          />
          <ellipse cx="12" cy="22" rx="6" ry="3" fill="#2A2A2A" stroke="#3B3B3B" stroke-width="0.5" />
          <circle cx="12" cy="15" r="3" fill="var(--accent)" opacity="0.8" />
          <path d="M6 22 L2 30 L6 27Z" fill="#6B7280" />
          <path d="M18 22 L22 30 L18 27Z" fill="#6B7280" />
          <g ref="flameRef">
            <ellipse cx="12" cy="29" rx="3" ry="5" fill="var(--accent)" opacity="0.5" />
            <ellipse cx="12" cy="30" rx="1.5" ry="3" fill="#E5E5E5" opacity="0.7" />
          </g>
        </svg>

        <div class="horizon-line" />
        <div class="launch-zone" @mouseenter="launch" @touchstart.passive="launch" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactIcons from '@/components/ContactIcons.vue';
import { useRocketAnimation } from '@/composables/useRocketAnimation';

export default defineComponent({
  name: 'HomePage',
  components: { ContactIcons },
  setup() {
    const { sceneRef, canvasRef, rocketRef, flameRef, jackRef, launch } = useRocketAnimation();

    return { sceneRef, canvasRef, rocketRef, flameRef, jackRef, launch };
  },
});
</script>

<style scoped>
.page {
  padding-top: 56px;
  min-height: 100vh;
}

.hero {
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 2rem 3rem;
  position: relative;
}

.name {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 400;
  margin: 0 0 1.25rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.accent {
  color: var(--accent);
}

.scene {
  position: relative;
  width: 100%;
  height: 180px;
  margin-top: 3rem;
  overflow: visible;
}

.scene canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.rocket {
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translateX(-50%);
  width: 22px;
  pointer-events: none;
}

.horizon-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--border);
}

.launch-zone {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 80px;
  cursor: pointer;
}
</style>