<template>
  <div>
    <h2 ref="title">{{obj.name}}-{{obj.age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script>
    import { reactive, ref, watchEffect } from 'vue';
export default {
    setup() {
        let obj = reactive({name: 'chenjie', age: 18});
        let title = ref(null);

        const stop = watchEffect(() => {
            // 监听用到的数据
            console.log(obj.name, obj.age);
            console.log(title.value)
        },{
            flush: 'post'  // 组件渲染完成之后执行
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
            changeAge,
            title
        }
    }
}
</script>

<style>

</style>