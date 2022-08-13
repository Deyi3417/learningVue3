<script>
export default {
  name: "Page",
  methods: {
    goPage: function () {
      console.log(this.$router)
      console.log(this.$route)
      /*
       router.push(...)
       this.$router.push("/parent")
       注意：在 Vue 实例中，你可以通过 $router 访问路由实例。因此你可以调用 this.$router.push。
       也可以添加条件进行跳转
       */
      // 字符串路径 this.$router.push("/parent")

      // 带有路径的对象 router.push({ path: '/users/eduardo' })

      // 带参数 this.$router.push({path: "/user/234"})

      // 命名的路由，并加上参数，让路由建立 url   this.$router.push({name: 'liudy', params: {id: 98989}})

      // 带查询参数（?问号），结果是 /register?plan=private this.$router.push({name:'about', query:{name:'liudy23', password:'9898'}})

      if (123 === 345) {
        this.$router.push("/parent")
      } else {
        console.log("不符合跳转条件，用户没有登录，无法进行跳转");
        // this.$router.push({name: 'liudy', params: {id: 98989}})
        this.$router.push({name:'about', query:{name:'liudy23', password:'9898'}})
      }
    }
  },
}
</script>

<template>
  <p style="color: yellowgreen; border: 3px cornflowerblue; ">--------------------------------------------------</p>
  <h2>Page页面</h2>
  <div>
    <button @click="goPage">跳转页面</button>
  </div>

</template>

<style scoped>

</style>