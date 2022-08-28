<template>
  <div>
    <!-- <button @click="change">dianji</button>
    <input type="text" :value="modelValue" @input="change"> -->

    <input type="text" v-model="test" />
  </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String
        }
    },
    computed: {
       test: {
         get() {
            return this.modelValue;
        },
        set(value) {
            return this.$emit('update:model-value', value)
        },
       }
    },
    emits: ['update:model-value'],
    methods: {
        change(event) {
            this.$emit('update:model-value', event.target.value)
        }
    }
}
</script>

<style>

</style>