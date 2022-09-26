<template>
  <div>
    <h1>父组件：{{ counter }}</h1>
    <HelloWorldVue></HelloWorldVue>

    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { ref, provide, readonly } from 'vue';
import HelloWorldVue from './HelloWorld.vue';
export default {
    components: {
        HelloWorldVue
    },
 setup() {
    let counter = ref(0);
    
    // 如果这样串参的话，会打破单项数据流，子组件也可以更改父组件的数据
    // provide('counter', counter);

    provide('counter', readonly(counter));

    const increment = () => counter.value++;
    const decrement = () => counter.value--;


    return {
        counter,
        increment,
        decrement
    }

 }
}
</script>

<style>

</style>