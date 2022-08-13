<script>
export default {
  name: "Parent"
}
</script>
<template>
  <div>
    <h2>父组件-Parent</h2>
    <router-link to="/parent/styleOne">样式1</router-link>  --
    <router-link to="/parent/styleTwo">样式2</router-link>
    <router-view></router-view>
  </div>

</template>


<style scoped>

</style>