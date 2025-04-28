<template>
    <div class="contactContainer">
      <a href="https://drive.google.com/file/d/1bHy2zqcYWDa5ZG_cUxwl0vBsYXn8of-0/view?usp=sharing" class="contactBox" target="_blank">
        <img src="/icons/resume.png" alt="Resume" />
      </a>
      <a href="https://www.linkedin.com/in/jack-b-smiley/" class="contactBox" target="_blank">
        <img src="/icons/linkedin.png" alt="LinkedIn" />
      </a>
      <a href="https://github.com/SmileyJack" class="contactBox" target="_blank">
        <img src="/icons/github.png" alt="GitHub" />
      </a>
      <a href="mailto:jackbsmiley@gmail.com?subject=&body=" class="contactBox">
        <img src="/icons/email.png" alt="Email" />
      </a>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        screen: "computer"
      }
    },
    methods: {
      resize() {
        this.screen = window.innerWidth > 700 ? "computer" : "phone";
      },
    },
    mounted() {
      this.resize();
      window.addEventListener('resize', this.resize);
    },
  });
  </script>
  
  <style scoped>
  
  .contactBox {
    width: 4vw;
    height: 4vw;
    background: #A98CFF;
    border-radius: 0.5vw;
    margin-right: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease;
  }

  .contactContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    left: clamp(0.5vw)
  }
  
  .contactBox img {
    height: 70%;
    filter: invert(0%) sepia(8%) saturate(3616%) hue-rotate(37deg) brightness(100%) contrast(76%);
  }
  
  .contactBox:hover {
    transform: scale(1.08);
    cursor: pointer;
  }
  
  @media (max-width: 700px) {
    .contactBox {
      width: 9vw;
      height: 9vw;
      border-radius: 5px;
      margin-right: 1vw;
    }
  
    .contactBox img {
      height: 70%;
    }
  }
  </style>
  