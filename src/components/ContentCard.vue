<template>
    <div class="main-card">
        <div class="card" v-for="item in resumeItems" :key="item.id">
            <h2 >{{ item.company }}</h2>
            <h3>{{ item.title }}</h3>
            <p class="details">{{ item.dates}}</p>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { setup } from 'vue-class-component';

export default defineComponent({
    name: 'ContentCard',
    props: {
        items: {
            type: String 
        }
    }

})

</script>


<style>

.main-card {
    display: flex;
}

</style>
