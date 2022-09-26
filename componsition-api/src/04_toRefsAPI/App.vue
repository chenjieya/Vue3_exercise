<template>
  <div>
    <h2>{{ counter }}</h2>
    <h3>{{ nameRef }}</h3>
    <button @click="handleChange">点击</button>
    <button @click="changeName">改变名字</button>
  </div>
</template>

<script>
    import { reactive, toRef, toRefs } from 'vue'
export default {
    setup() {
        const state = reactive({ counter: 0, name: 'cj' })
        let { counter } = toRefs(state);
        let nameRef = toRef(state, 'name');

        const handleChange = () => {
            counter.value ++;
            console.log(state.counter, '和roRefs的是关联的')
        }

        const changeName = () => {
            nameRef.value = 'chenjie'
        }

        return {
            nameRef,
            counter,
            handleChange,
            changeName
        }
    }
}
</script>

<style>

</style>