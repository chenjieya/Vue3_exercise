<template>
  <div>
    <!-- <h1>{{info.name}} - {{info.age}}</h1> -->
    <h1>{{info1}} - {{info1}}</h1>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
    setup() {
        const info = reactive({name:'cj', age: 18});
        const info1 = ref('cj')

        // watch监听reactive响应式
        // watch(()=>info.name, (newVal, oldVal) => {
        //     console.log(newVal, oldVal);
        // }, {
        //     immediate: false
        // })

        // watch监听reactive响应式对象
        // watch(info, (newVal, oldVal) => {
        //     console.log(newVal, oldVal);
        //     console.log(newVal.name);
        // }, {
        //     immediate: false
        // })

        // watch(() => ({...info}), (newVal, oldVal) => {
        //     console.log(newVal, oldVal);
        // }, {
        //     immediate: false
        // })

       

        // watch监听ref对象
        watch(info1, (newVal, oldVal) => {
            console.log(newVal, oldVal)
        }, {
            deep: true
        })

        const changeName = () => {
            info1.value = 'chenjie';
        }

        const changeAge = () => {
            info1.value.age++;
        }

        return {
            info,
            info1,
            changeAge,
            changeName
        }
    }
}
</script>

<style>

</style>