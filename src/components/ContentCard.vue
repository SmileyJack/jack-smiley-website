<template>
    <div class="main-card" @click="openModal">
      <h3>{{ item.title }}</h3>
      <p>{{ item.company }}</p>
      <small>{{ item.time }}</small>
    </div>
  
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2>{{ item.title }}</h2>
        <p><strong>Company:</strong> {{ item.company }}</p>
        <p><strong>Location:</strong> {{ item.location }}</p>
        <p><strong>Time:</strong> {{ item.time }}</p>
        <p><strong>Skills:</strong> {{ item.skills || 'N/A' }}</p>
        <a :href="item.link" target="_blank"></a>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType, ref } from 'vue';
  import type { ExperienceItem } from '@/utils/experienceInfo';

  export default defineComponent({
    name: 'ContentCard',
    props: {
      item: {
        type: Object as PropType<ExperienceItem>,
        required: true
      }
    },
    setup() {
      const isModalOpen = ref(false);
  
      const openModal = () => {
        isModalOpen.value = true;
      };
  
      const closeModal = () => {
        isModalOpen.value = false;
      };
  
      return {
        isModalOpen,
        openModal,
        closeModal
      };
    }
  });
  </script>
  
  <style>
  .main-card {
    width: 15vw;
    height: 5vw;
    background: #A98CFF;
    border-radius: 0.5vw;
    margin-right: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }

    img {
    height: 70%;
    }
    
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: #A98CFF;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 100%;
  }
  
  .modal-content button {
    margin-top: 16px;
    padding: 8px 16px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .modal-content button:hover {
    background: #0056b3;
  }
  </style>
  