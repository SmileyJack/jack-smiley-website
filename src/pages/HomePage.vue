<template>
  <div class="page">
    <div class="hero-glow" />
    <section class="hero">
      <div class="hero-content">
        <h1 class="name">
          <span>Jack </span>
          <span class="accent">Smiley.</span>
        </h1>
        <ContactIcons />
      </div>
      <div class="hero-photo">
        <img src="/headshot.png" alt="Jack Smiley" class="headshot" />
      </div>
    </section>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactIcons from '@/components/ContactIcons.vue';

export default defineComponent({
  name: 'HomePage',
  components: { ContactIcons },
});
</script>

<style scoped>
.page {
  padding-top: 56px;
  min-height: 100vh;
  position: relative;
}

.hero {
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
}

.hero-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 50% 60% at 15% 55%, rgba(59, 130, 246, 0.1) 0%, transparent 70%),
    radial-gradient(ellipse 35% 45% at 80% 25%, rgba(139, 92, 246, 0.07) 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  flex: 1;
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

.hero-photo {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
}

.hero-photo::before {
  content: '';
  position: absolute;
  inset: 0;
  translate: 10px 10px;
  background: var(--accent);
  border-radius: 14px;
  opacity: 0.25;
}

.headshot {
  position: relative;
  display: block;
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: top;
  border-radius: 12px;
}

@media (max-width: 600px) {
  .hero {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 2rem;
  }

  .headshot {
    width: 140px;
    height: 140px;
  }
}
</style>
