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
</style>
