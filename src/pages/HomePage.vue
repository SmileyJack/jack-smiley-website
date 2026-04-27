<template>
  <div class="page">
    <section class="hero">
      <div class="hero-text">
        <h1 class="name">
          <GlitchText text="Jack " />
          <GlitchText text="Smiley." color="var(--accent)" />
        </h1>
        <p class="tagline">Software engineer at the intersection of finance and code.</p>
        <p class="bio">
          I build software with a focus on correctness, infrastructure, and the unglamorous systems
          that make everything else work. Currently studying at the University of Nebraska-Lincoln's
          Raikes School.
        </p>
        <ContactIcons />
      </div>
    </section>

    <ExperienceCards />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GlitchText from '@/components/GlitchText.vue';
import ContactIcons from '@/components/ContactIcons.vue';
import ExperienceCards from '@/components/ExperienceCards.vue';

export default defineComponent({
  name: 'HomePage',
  components: { GlitchText, ContactIcons, ExperienceCards },
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
}

.name {
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 700;
  margin: 0 0 1rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.tagline {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--muted);
  margin: 0 0 1.25rem;
  font-weight: 400;
}

.bio {
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.7;
  max-width: 540px;
  margin: 0 0 2rem;
}
</style>
