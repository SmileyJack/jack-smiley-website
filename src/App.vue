<template>
  <div id="app">
    <HomePage /> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomePage from './components/HomePage.vue';

export default defineComponent({
  name: 'App',
  components: {
    HomePage,
  },
});
</script>

<style>

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #34344A;
  min-height: 100vh;
}
</style>
