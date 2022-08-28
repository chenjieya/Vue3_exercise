<template>
  <div>
    <HomeApp></HomeApp>
    <button @click="addName">dianji</button>
  </div>
</template>

<script>
import HomeApp from './HomeApp.vue';
import { computed } from 'vue';

export default {
    components: {
        HomeApp
    },
    provide() {
        return {
            name: this.name,
            age: 18,
            length: computed(() => this.arr.length)
        }
    },
    data() {
        return {
            arr: [1,2,3,4,5,6],
            name: 'chenjie'
        }
    },
    methods: {
        addName() {
            this.arr.push('c');
            this.name = 'cj'
        },
    }
}
</script>

<style>

</style>