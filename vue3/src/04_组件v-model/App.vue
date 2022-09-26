<template>
  <div>
    <cj-input v-model="test"></cj-input>
    <!-- <cj-input :model-value="test" @update:model-value="test = $event"></cj-input> -->
    <h2>{{ test }}</h2>
  </div>
</template>

<script>
import CjInput from './CjInput.vue';
export default {
    components: {
        CjInput
    },
    data() {
        return {
            test: 'cj'
        }
    }
}
</script>

<style>

</style>