<template>
  <div class="contact-icons">
    <a href="https://drive.google.com/file/d/1bHy2zqcYWDa5ZG_cUxwl0vBsYXn8of-0/view?usp=sharing" class="icon-btn" target="_blank" title="Resume">
      <img src="/icons/resume.png" alt="Resume" />
    </a>
    <a href="https://www.linkedin.com/in/jack-b-smiley/" class="icon-btn" target="_blank" title="LinkedIn">
      <img src="/icons/linkedin.png" alt="LinkedIn" />
    </a>
    <a href="https://github.com/SmileyJack" class="icon-btn" target="_blank" title="GitHub">
      <img src="/icons/github.png" alt="GitHub" />
    </a>
    <a href="mailto:jackbsmiley@gmail.com" class="icon-btn" title="Email">
      <img src="/icons/email.png" alt="Email" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({ name: 'ContactIcons' });
</script>

<style scoped>
.contact-icons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.icon-btn {
  width: 40px;
  height: 40px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.15s, background 0.15s;
}

.icon-btn:hover {
  border-color: var(--accent);
  background: #1e2a3a;
}

.icon-btn img {
  height: 60%;
  width: auto;
  filter: brightness(0.85);
}

.icon-btn:hover img {
  filter: brightness(1);
}
</style>
