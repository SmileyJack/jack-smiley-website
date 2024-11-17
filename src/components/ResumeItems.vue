<template>
    <div class="container">
        <div class="resume-cards">
            <ContentCard items=resumeItems></ContentCard>
        </div>
    </div>
</template>

<script lang="ts">

import { reactive, defineComponent } from 'vue';
// import ContentCard from './ContentCard.vue';

export default defineComponent({
    name: 'ResumeItems',
    components: {

    },

    setup() {
        const resumeItems = reactive([
            { company: 'NIMBUS Labs', title: 'Undergraduate Research Assistant', dates: 'Feb. 2023 - May. 2023'},
            { company: 'Hudl', title: 'Software Engineering Intern', dates: 'May. 2023 - Aug. 2023 & May. 2024 - Aug. 2024'},
            { company: 'Scoular', title: 'IT Analytics Intern', dates: 'May. 2022 - Aug. 2022'},
            { company: 'UNL School of Computing', title: 'SWE III Teaching Assistant', dates: 'Aug. 2024 - Dec. 2024'}
        ]);

        return {
            resumeItems
        }
    },
})

</script>

<style scoped>

</style>