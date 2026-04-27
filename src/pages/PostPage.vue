<template>
  <div class="page">
    <div class="content">
      <router-link to="/essays" class="back-link">← Essays</router-link>

      <div v-if="loading" class="state-text">Loading...</div>
      <div v-else-if="!post" class="state-text">Post not found.</div>

      <article v-else>
        <header class="post-header">
          <div class="post-date">{{ formatDate(post.meta.date) }}</div>
          <h1 class="post-title">{{ post.meta.title }}</h1>
          <p class="post-desc">{{ post.meta.description }}</p>
        </header>
        <div class="prose" v-html="post.content" />
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getPost } from '@/utils/markdownUtils';
import type { Post } from '@/utils/markdownUtils';

export default defineComponent({
  name: 'PostPage',
  setup() {
    const route = useRoute();
    const post = ref<Post | null>(null);
    const loading = ref(true);

    async function load() {
      loading.value = true;
      post.value = await getPost(route.params.id as string);
      loading.value = false;
    }

    onMounted(load);
    watch(() => route.params.id, load);

    function formatDate(d: string) {
      return new Date(d).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      });
    }

    return { post, loading, formatDate };
  },
});
</script>

<style scoped>
.page {
  padding-top: 56px;
  min-height: 100vh;
}

.content {
  max-width: 680px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.back-link {
  display: inline-block;
  font-size: 0.8rem;
  color: var(--muted);
  text-decoration: none;
  margin-bottom: 3rem;
  letter-spacing: 0.03em;
  transition: color 0.15s;
}

.back-link:hover {
  color: var(--accent);
}

.state-text {
  color: var(--muted);
  font-size: 0.9rem;
}

.post-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
}

.post-date {
  font-size: 0.75rem;
  color: var(--muted);
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.post-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 0.75rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text);
}

.post-desc {
  font-size: 1rem;
  color: var(--muted);
  margin: 0;
  line-height: 1.6;
}
</style>

<style>
.prose {
  font-size: 1rem;
  line-height: 1.75;
  color: #c9cdd4;
}

.prose h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text);
  margin: 2.5rem 0 0.75rem;
  letter-spacing: -0.01em;
}

.prose h3 {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  margin: 2rem 0 0.5rem;
}

.prose p {
  margin: 0 0 1.25rem;
}

.prose a {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.prose code {
  font-family: 'Courier New', monospace;
  font-size: 0.85em;
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 0.1em 0.35em;
  border-radius: 4px;
}

.prose pre {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 1.25rem;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.prose pre code {
  background: none;
  border: none;
  padding: 0;
  font-size: 0.875rem;
}

.prose ul,
.prose ol {
  padding-left: 1.5rem;
  margin: 0 0 1.25rem;
}

.prose li {
  margin-bottom: 0.4rem;
}

.prose blockquote {
  border-left: 3px solid var(--accent);
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: var(--muted);
  font-style: italic;
}
</style>
