<template>
    <div class="card-grid">
      <ContentCard v-for="item in experienceInfo" :key="item.title" :item="item" />
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import ContentCard from './ContentCard.vue';
import { experienceInfo } from '@/utils/experienceInfo';

export default defineComponent({
    name: 'ResumeItems',
    components: {
        ContentCard,
    },

    setup() {
        return {
            experienceInfo
        }
    },
})

</script>

<style scoped>

.card-grid {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(300px, 1fr);
  gap: 2rem;
  padding: 2rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory; 
}


</style>