<template>
  <div class="page">
    <div class="content">
      <header class="page-header">
        <span class="label">Essays</span>
        <p class="subtitle">Notes on software, finance, and things I'm thinking about.</p>
      </header>

      <div v-if="loading" class="state-text">Loading...</div>
      <div v-else-if="posts.length === 0" class="state-text">No posts yet.</div>

      <div v-else class="post-grid">
        <router-link
          v-for="post in posts"
          :key="post.id"
          :to="`/essays/${post.id}`"
          class="post-card"
        >
          <div class="post-date">{{ formatDate(post.meta.date) }}</div>
          <h2 class="post-title">{{ post.meta.title }}</h2>
          <p class="post-desc">{{ post.meta.description }}</p>
          <span class="post-arrow">→</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { getAllPosts } from '@/utils/markdownUtils';
import type { Post } from '@/utils/markdownUtils';

export default defineComponent({
  name: 'EssaysPage',
  setup() {
    const posts = ref<Post[]>([]);
    const loading = ref(true);

    onMounted(async () => {
      posts.value = await getAllPosts();
      loading.value = false;
    });

    function formatDate(d: string) {
      return new Date(d).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
      });
    }

    return { posts, loading, formatDate };
  },
});
</script>

<style scoped>
.page {
  padding-top: 56px;
  min-height: 100vh;
}

.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.page-header {
  margin-bottom: 3rem;
}

.label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  display: block;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.1rem;
  color: var(--muted);
  margin: 0;
}

.state-text {
  color: var(--muted);
  font-size: 0.9rem;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1px;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}

.post-card {
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  background: var(--surface);
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid var(--border);
  transition: background 0.15s;
  position: relative;
}

.post-card:last-child {
  border-bottom: none;
}

.post-card:hover {
  background: #222;
}

.post-date {
  font-size: 0.75rem;
  color: var(--muted);
  margin-bottom: 0.5rem;
  letter-spacing: 0.03em;
}

.post-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 0.6rem;
  line-height: 1.35;
}

.post-desc {
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.post-arrow {
  display: block;
  margin-top: 1.25rem;
  color: var(--accent);
  font-size: 0.9rem;
}
</style>
