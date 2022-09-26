<template>
  <div>
    <button @click="handle">点击</button>
    {{ state.number }}
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    setup() {
        const state = reactive({
            number: 0
        })

        const handle = () => {
            state.number++
        }

        return {
            state,
            handle
        }
    }
}
</script>

<style>

</style>