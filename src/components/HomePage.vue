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
  <div>
    <ContactIcons></ContactIcons>
  </div>
  <div>
    <ResumeItems></ResumeItems>
  </div>
</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import ResumeItems from './ResumeItems.vue';
import GlitchText from './GlitchText.vue';
import ContactIcons from './ContactIcons.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    ResumeItems,
    GlitchText,
    ContactIcons,
  },
  
  setup() {
    const headshotSrc = '/headshot.png'

    return {
      headshotSrc,
    };
  }
});
</script>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 5%;
  padding-top: clamp(4rem, 8vh, 6rem);
}

.backdrop {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #A98CFF;
  border-radius: 10px;
  position: relative;
  aspect-ratio: 4 / 3;
  width: clamp(200px, 30vw, 400px);
  margin-top: clamp(8rem, 10vh, 14rem);
  margin-bottom: clamp(2rem, 5vh, 4rem);
  margin-left: auto;
  margin-right: auto;
  order: 2;
}

.headshot {
  width: clamp(150px, 30vw, 300px);
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
  max-width: 45%;
  order: 1;
  text-align: left;
}

.hello {
  font-size: clamp(2rem, 6vw, 5rem);
  font-weight: bolder;
  margin: 0;
}

.name {
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: bold;
  margin: 0;
}

.blurb {
  font-size: clamp(1rem, 3vw, 2rem);
  font-weight: bold;
  margin: 0;
}

@media (max-width: 900px) {
  .backdrop {
    order: 2;
  }

  .text-container {
    order: 1;
  }
}
@media (max-width: 768px) {

  .backdrop {
    order: 1;
    margin-top: clamp(4rem, 10vh, 8rem);
    margin-bottom: clamp(2rem, 5vh, 4rem);
    margin-left: auto;
    margin-right: auto;
  }

  .text-container {
    order: 2;
  }

  .container {
    flex-direction: column;
    align-items: center;
  }

  .text-container {
    width: 90%;
    max-width: 90%;
    margin: 0;
    align-items: center;
    text-align: center;
  }
}

</style>
