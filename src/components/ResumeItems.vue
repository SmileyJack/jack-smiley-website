<template>
    <div class="container">
        <div class="resume-cards">
            <div class="card" v-for="item in resumeItems" :key="item.id">
                <h2 >{{ item.company }}</h2>
                <h3>{{ item.title }}</h3>
                <p class="details">{{ item.dates}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { reactive, defineComponent } from 'vue';

export default defineComponent({
    name: 'ResumeItems',

    setup() {
        const resumeItems = reactive([
            { id: 1, company: 'NIMBUS Labs', title: 'Undergraduate Research Assistant', dates: 'Feb. 2023 - May. 2023'},
            { id: 2, company: 'Hudl', title: 'Software Engineering Intern', dates: 'May. 2023 - Aug. 2023 & May. 2024 - Aug. 2024'},
            { id: 3, company: 'Scoular', title: 'IT Analytics Intern', dates: 'May. 2022 - Aug. 2022'},
            { id: 4, company: 'UNL School of Computing', title: 'SWE III Teaching Assistant', dates: 'Aug. 2024 - Dec. 2024'}
        ]);

        return {
            resumeItems
        }
    },
})

</script>

<style scoped>
.resume-cards {
  display: flex;
  justify-content: flex-start;
  margin-right: 5%;
  padding-bottom: 2rem;
  gap:1.5rem;
  flex-wrap: wrap;
  margin-left: 5%;
}

.card {
  width: 350px;
  border: 1px solid #ddd;
  padding: 1rem;
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

.card h2 {
    color: #A98CFF;
}

.card p {
  margin: 0 0 5px;
}

.details {
  font-size: 0.9em;
  color: #666;
}

@media (max-width: 1024px) {
  .card {
    flex: 1 1 calc(50% - 1.5rem); /* 2 cards per row on medium screens */
  }
}

@media (max-width: 768px) {
  .resume-cards {
    justify-content: center; /* Center items on smaller screens */
    margin-left: 0;
    margin-right: 0;
    text-align: center;
  }

  .card {
    flex: 1 1 100%; /* Make cards full width on smaller screens */
    max-width: none; /* Remove max-width restriction */
  }
}

</style>