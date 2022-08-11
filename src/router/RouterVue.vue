<script>
export default {
  name: "RouterVue"
}
</script>
<template>
  <router-view></router-view>
  <h1>Hello App!</h1>
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <!--  使用一个自定义组件 router-link 来创建链接
      这使得 Vue Router 可以在不重新加载页面的情况下更改 URL，处理 URL 的生成以及编码。
      -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
<!--  router-view 将显示与 url 对应的组件。你可以把它放在任何地方，以适应你的布局。-->
  <router-view></router-view>

</template>


<style scoped>

</style>