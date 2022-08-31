<template>
  <div>
    <h1>{{info.name}} - {{info.age}}</h1>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script>
import { reactive, watch } from 'vue';

export default {
    setup() {
        const info = reactive({name:'cj', age: 18});

        // watch监听reactive响应式
        // watch(()=>info.name, (newVal, oldVal) => {
        //     console.log(newVal, oldVal);
        // }, {
        //     immediate: false
        // })

        // watch监听reactive响应式对象
        watch(info, (newVal, oldVal) => {
            console.log(newVal, oldVal);
            console.log(newVal.name);
        }, {
            immediate: false
        })

        watch(() => ({...info}), (newVal, oldVal) => {
            console.log(newVal, oldVal);
        }, {
            immediate: false
        })

        const changeName = () => {
            info.name = 'chenjie';
        }

        const changeAge = () => {
            info.age++;
        }


        return {
            info,
            changeAge,
            changeName
        }
    }
}
</script>

<style>

</style>