<template>
  <section class="experience">
    <span class="label">Experience</span>

    <div class="timeline">
      <div v-for="(item, i) in experienceInfo" :key="item.title" class="entry">
        <div class="entry-left">
          <div class="dot" :class="{ active: i === 0 }" />
          <div v-if="i < experienceInfo.length - 1" class="line" />
        </div>

        <div class="entry-body">
          <div class="entry-top">
            <div>
              <div class="company">
                <a v-if="item.link" :href="item.link" target="_blank" class="company-link">
                  {{ item.company }} <span class="arrow">↗</span>
                </a>
                <span v-else>{{ item.company }}</span>
              </div>
              <div class="role">{{ item.title }}</div>
            </div>
            <div class="meta">
              <span class="time">{{ item.time }}</span>
              <span class="location">{{ item.location }}</span>
            </div>
          </div>

          <p v-if="item.description" class="description">{{ item.description }}</p>

          <div v-if="item.skills" class="tags">
            <span v-for="skill in item.skills.split(',')" :key="skill" class="tag">
              {{ skill.trim() }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { experienceInfo } from '@/utils/experienceInfo';

export default defineComponent({
  name: 'ExperienceCards',
  setup() {
    return { experienceInfo };
  },
});
</script>

<style scoped>
.experience {
  width: 100%;
  max-width: 900px;
  margin: 5rem auto 0;
  padding: 0 2rem 4rem;
}

.label {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 2.5rem;
}

.timeline {
  display: flex;
  flex-direction: column;
}

.entry {
  display: flex;
  gap: 1.5rem;
}

.entry-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 16px;
  padding-top: 4px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--border);
  border: 2px solid var(--border);
  flex-shrink: 0;
  transition: background 0.2s, border-color 0.2s;
}

.dot.active {
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.line {
  width: 1px;
  flex: 1;
  background: var(--border);
  margin: 6px 0;
  min-height: 2rem;
}

.entry-body {
  padding-bottom: 2.75rem;
  flex: 1;
  min-width: 0;
}

.entry:last-child .entry-body {
  padding-bottom: 0;
}

.entry-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.company {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.2rem;
}

.company-link {
  color: var(--text);
  text-decoration: none;
  transition: color 0.15s;
}

.company-link:hover {
  color: var(--accent);
}

.arrow {
  font-size: 0.7em;
  color: var(--muted);
  vertical-align: super;
}

.company-link:hover .arrow {
  color: var(--accent);
}

.role {
  font-size: 0.875rem;
  color: var(--accent);
  font-weight: 500;
}

.meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
  flex-shrink: 0;
}

.time {
  font-size: 0.78rem;
  color: var(--muted);
  white-space: nowrap;
}

.location {
  font-size: 0.72rem;
  color: var(--border);
  color: #444;
}

.description {
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.7;
  margin: 0 0 0.875rem;
  max-width: 620px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

@media (max-width: 600px) {
  .entry-top {
    flex-direction: column;
    gap: 0.3rem;
  }

  .meta {
    align-items: flex-start;
  }
}
</style>
