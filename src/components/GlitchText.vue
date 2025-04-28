<template>
    <span 
      class="glitch-text" 
      :data-text="text" 
      :style="{color}" 
      @mouseover="startGlitch" 
      @mouseout="stopGlitch"
    >
      {{ displayText }}
    </span>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'GlitchText',
    props: {
      text: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: 'white'
      },    
    },
    setup(props) {
      const displayText = ref(props.text);
      let glitchInterval: number | null = null;
  
      const startGlitch = () => {
        glitchInterval = window.setInterval(() => {
          displayText.value = props.text
            .split('')
            .map((char: string) => (char !== ' ' ? getRandomChar() : char))
            .join('');
        }, 50);
        setTimeout(() => {
          stopGlitch()
        }, 500)
      };
  
      const stopGlitch = () => {
        if (glitchInterval) {
          clearInterval(glitchInterval);
          glitchInterval = null;
        }
        displayText.value = props.text;
      };
  
      const getRandomChar = (): string => {
        const chars = '01';
        return chars[Math.floor(Math.random() * chars.length)];
      };
  
      return {
        displayText,
        startGlitch,
        stopGlitch,
      };
    },
  });
  </script>
  
  <style scoped>
  .glitch-text {
    cursor: pointer;
    overflow: hidden;
    display: inline;
  }
  </style>
  