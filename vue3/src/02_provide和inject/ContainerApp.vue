<template>
  <div>container-{{name}}-{{age}}-{{length}}</div>
</template>

<script>
export default {
    name: 'ContainerApp.vue',
    inject: ['name', 'age', 'length'],
}
</script>

<style>

</style>