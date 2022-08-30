<template>
  <div>
    <h2>{{obj.name}}-{{obj.age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script>
    import { reactive, watchEffect } from 'vue';
export default {
    setup() {
        let obj = reactive({name: 'chenjie', age: 18});

        const stop = watchEffect(() => {
            // 监听用到的数据
            console.log(obj.name, obj.age);
        })

        const changeName = () => {
            obj.name = 'cj';
        }
        const changeAge = () => {
            obj.age++;

            if(obj.age > 25) {
                stop();  // 停止监听
            }
        }

        return {
            obj, 
            changeName,
            changeAge
        }
    }
}
</script>

<style>

</style>