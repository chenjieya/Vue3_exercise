<template>
  <div>
    <button @click="handle">dainji</button>
    {{ number }}
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        let number = ref(0);

        const handle = () => {
            number.value++;
        }
        return {
            number,
            handle
        }
    }
}
</script>

<style>

</style>