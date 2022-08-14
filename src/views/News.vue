<script>
export default {
  name: "News",
  data() {
    return {
      age: 27,
    };
  },
  /*
  beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。
   */
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
    console.log("路由进入组件之前执行")
    // next 里面一个回调函数  通过 `vm` 访问组件实例
    next(vm => {
      console.log("----vm----")
      console.log(vm)
      console.log(vm.age)
    })
  },
  beforeRouteUpdate(to, from) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
    console.log("路由更新组件之前执行")

  },
  beforeRouteLeave(to, from) {
    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
    console.log("路由离开组件之前执行")

  },
}
</script>
<template>
  <p style="color: yellowgreen; border: 3px cornflowerblue; ">--------------------------------------------------</p>
  <div>
    <h2>News界面</h2>
  </div>

</template>


<style scoped>

</style>