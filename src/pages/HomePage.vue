<template>
  <div class="page">
    <section class="hero">
      <div class="hero-glow" />
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
}

.hero {
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 2rem 3rem;
  position: relative;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: 0;
  left: -10%;
  width: 120%;
  height: 100%;
  background:
    radial-gradient(ellipse 60% 50% at 20% 60%, rgba(59, 130, 246, 0.12) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 75% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 65%);
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
