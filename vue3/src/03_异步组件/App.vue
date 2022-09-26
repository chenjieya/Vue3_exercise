<template>
  <div>
    <home-app></home-app>
    {{ age }}
  </div>
</template>

<script>
// import HomeApp from './HomeApp.vue';
import { defineAsyncComponent } from 'vue';
const HomeApp = defineAsyncComponent(() => import('./HomeApp.vue'));
export default {
  components: {
    HomeApp
  },
  created() {
    setTimeout(() => {
      this.age += 1;
    }, 1000);
  },
  data() {
    return {
      age: 1
    }
  },
}
</script>

<style>

</style>