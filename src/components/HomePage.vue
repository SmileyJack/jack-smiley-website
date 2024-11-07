<template>
  <div class="main-container">
  <div class="container">
    <div class="backdrop">
        <img :src="headshotSrc" alt="Pictured: A handsome Jack Smiley" class="headshot"/>
    </div>
    <div class="text-container">
      <div class="hello">
        <GlitchText text="Hello! "></GlitchText>
      </div>
      <div class="name">
        <GlitchText text="I'm "></GlitchText>
        <GlitchText text="Jack " color="#A98CFF"></GlitchText>
        <GlitchText text="Smiley. " color="#A98CFF"></GlitchText>
      </div>
      <div class="blurb">
        <GlitchText text="I'm "></GlitchText>
        <GlitchText text="a software "></GlitchText>
        <GlitchText text="engineer "></GlitchText>
        <GlitchText text="with "></GlitchText>
        <GlitchText text="a passion "></GlitchText>
        <GlitchText text="in the "></GlitchText>
        <GlitchText text="collision of "></GlitchText>
        <GlitchText text="finance " color="#A98CFF"></GlitchText>
        <GlitchText text="and "></GlitchText>
        <GlitchText text="code." color="#A98CFF"></GlitchText>
      </div>
    </div>
  </div>
  <div class="home-page">
    <ResumeItems></ResumeItems>
  </div>
</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import ResumeItems from './ResumeItems.vue';
import GlitchText from './GlitchText.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    ResumeItems,
    GlitchText
  },
  
  setup() {
    const headshotSrc = require('@/assets/headshot.png')

    return {
      headshotSrc,
    };
  }
});
</script>

<style scoped>

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 5%;
  width: 100%;
}

.backdrop {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 400px;
  height: 300px; 
  margin-right: 5%; 
  margin-top: 10%; 
  background-color: #A98CFF;
  border-radius: 10px;
  position: relative;
  order: 2; 
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.headshot {
  width: 90%; 
  height: auto;
  position: absolute;
  bottom: 0;
}

.text-container {
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  margin-left: 5%;
  min-width: 20%; 
  max-width: 40%; 
  order: 1;
}

.hello {
  font-size: 5rem; 
  font-weight: bolder;
  text-align: left;
  margin: 0;
}

.name {
  font-size: 3rem; 
  font-weight: bold;
  text-align: left;
  margin: 0;
}

.blurb {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  margin: 0;
}

.home-page {
  text-align: center;
  width: 100%;
}

@media (max-width: 1024px) {
  .container {
    flex-wrap: wrap;
  }

  .backdrop {
    width: 80%; 
    height: auto;
    padding-top: 80%;
    margin: 0 auto 2rem;
    order: 1;
  }

  .text-container {
    width: 90%; 
    max-width: 100%; 
    margin: 0; 
    align-items: center; 
    text-align: center; 
    order: 2; 
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center; 
  }

  .backdrop {
    width: 80%; 
    height: auto;
    padding-top: 80%;
    margin: 0 auto 2rem;
    order: 1;
  }

  .text-container {
    width: 90%; 
    max-width: 100%; 
    margin: 0; 
    align-items: center; 
    text-align: center; 
    order: 2; 
  }

  .hello {
    font-size: 4rem; 
  }

  .name {
    font-size: 2.5rem; 
  }

  .blurb {
    font-size: 1.25rem;
  }
}
</style>
