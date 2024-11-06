<template>
  <div class="home-page">
    <h1>{{ message }}</h1>
    <div class="resume-cards">
      <div class="card" v-for="item in resumeItems" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <p class="details">{{ item.details }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'HomePage',
  
  setup() {
    const message = ref("My name is Jack Smiley :)")

    const resumeItems = reactive([
      { id: 1, title: 'Software Engineer', description: 'Developed web applications.', details: 'Company A, 2020-2023' },
      { id: 2, title: 'UI/UX Designer', description: 'Designed user interfaces and experiences.', details: 'Company B, 2018-2020' },
      { id: 3, title: 'Intern', description: 'Assisted in software development.', details: 'Company C, 2017-2018' }
    ]);

    return {
      message,
      resumeItems
    };
  }
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

.home-page {
  padding: 20px;
  text-align: center;
}
.resume-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  width: 300px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  margin: 0 0 10px;
}

.card p {
  margin: 0 0 5px;
}

.details {
  font-size: 0.9em;
  color: #666;
}

</style>
