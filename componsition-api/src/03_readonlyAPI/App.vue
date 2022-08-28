<template>
  <div>
    <button @click="handle">dianji</button>

    {{ num1.num }}
    <div> {{ num2.num }} </div>
  </div>
</template>

<script>
import { reactive, ref, readonly } from 'vue';
export default {
    setup() {
        // 普通对象
        let num = readonly({
            number: 0
        });

        // ref对象
        const num1 = readonly( ref({ num: 0 }) );


        // reactive对象
        const num2 = readonly( reactive( { num: 0 } ) )

        const handle = () => {
            num.number++;
            num1.num++;
            num2.num++;
        }

        return {
            handle,
            num1,
            num2
        }
    }
}
</script>

<style>

</style>