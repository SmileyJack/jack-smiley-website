<template>
    <div class="main-card">
        
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
    },
    setup(){
        return ''
    }

})

</script>


<style>

.main-card {
    display: flex;
}

</style>
