<template>
  <nav class="navbar">
    <router-link to="/" class="logo">JS</router-link>
    <div class="links">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/essays" class="nav-link">Essays</router-link>
      <router-link to="/fitness" class="nav-link">Fitness</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({ name: 'NavBar' });
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  z-index: 100;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: 0.05em;
}

.links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  transition: color 0.15s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--text);
}

.nav-link.router-link-exact-active {
  color: var(--accent);
}

@media (max-width: 480px) {
  .navbar {
    padding: 0 1rem;
  }
  .links {
    gap: 1.25rem;
  }
}
</style>
