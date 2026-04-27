<template>
  <section class="experience">
    <h2 class="section-title">Experience</h2>
    <div class="cards">
      <div
        v-for="item in experienceInfo"
        :key="item.title"
        class="card"
        @click="selected = selected?.title === item.title ? null : item"
      >
        <div class="card-header">
          <span class="card-company">{{ item.company }}</span>
          <span class="card-time">{{ item.time }}</span>
        </div>
        <div class="card-title">{{ item.title }}</div>
        <div class="card-location">{{ item.location }}</div>

        <div v-if="selected?.title === item.title" class="card-detail">
          <p v-if="item.description">{{ item.description }}</p>
          <p v-if="item.skills" class="card-skills">{{ item.skills }}</p>
          <a v-if="item.link" :href="item.link" target="_blank" class="card-link">Visit ↗</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { experienceInfo } from '@/utils/experienceInfo';
import type { ExperienceItem } from '@/utils/experienceInfo';

export default defineComponent({
  name: 'ExperienceCards',
  setup() {
    const selected = ref<ExperienceItem | null>(null);
    return { experienceInfo, selected };
  },
});
</script>

<style scoped>
.experience {
  width: 100%;
  max-width: 900px;
  margin: 4rem auto 0;
  padding: 0 2rem;
}

.section-title {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1.25rem;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 1px;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}

.card {
  background: var(--surface);
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  border-bottom: 1px solid var(--border);
  transition: background 0.15s;
}

.card:last-child {
  border-bottom: none;
}

.card:hover {
  background: #222;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
}

.card-company {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text);
}

.card-time {
  font-size: 0.78rem;
  color: var(--muted);
}

.card-title {
  font-size: 0.85rem;
  color: var(--accent);
  margin-bottom: 0.2rem;
}

.card-location {
  font-size: 0.78rem;
  color: var(--muted);
}

.card-detail {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.6;
}

.card-skills {
  color: var(--accent);
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.card-link {
  display: inline-block;
  margin-top: 0.75rem;
  font-size: 0.8rem;
  color: var(--accent);
  text-decoration: none;
}

.card-link:hover {
  text-decoration: underline;
}
</style>
