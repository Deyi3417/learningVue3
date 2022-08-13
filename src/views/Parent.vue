<script>
export default {
  name: "Parent"
}
</script>
<template>
  <div>
    <h2>父组件-Parent</h2>
    <!--
      除了使用 <router-link> 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。
      -->
    <router-link to="/parent/styleOne">样式1</router-link>
    --
    <router-link to="/parent/styleTwo">样式2</router-link>
    <router-view></router-view>
  </div>

</template>


<style scoped>

</style>