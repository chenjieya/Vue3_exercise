<template>
  <div>
    当前数： {{ counter }}
    当前数*2: {{ counterDounble }}

    <button @click="sonIncrement">子组件+1</button>
  </div>
</template>

<script>
import { computed, inject } from 'vue';
export default {
    setup() {
        let counter = inject('counter');
        
        const counterDounble = computed(() => counter.value * 2);

        const sonIncrement = () => counter.value++;


        return {
            counter,
            counterDounble,
            sonIncrement
        }
    }
    
}
</script>

<style>

</style>