<template>
  <div id="app">
    <NavBar />
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: { NavBar },
});
</script>

<style>
:root {
  --bg: #0F0F0F;
  --surface: #1A1A1A;
  --border: #2A2A2A;
  --accent: #3B82F6;
  --text: #E5E5E5;
  --muted: #6B7280;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bg);
  color: var(--text);
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

a {
  color: inherit;
}
</style>
