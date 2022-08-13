<script>
export default {
  name: "NavigationBar",
  methods: {
    goLogin(){
      if (999 === 999 ){
        console.log("NavigationBar页面测试----by liudy23")
        console.log(this.$router)
        this.$router.push({
          name: 'doLogin'
        })
      } else {
        console.log(this.$router)
      }
    },
  },
}
</script>
<template>
  <p style="color: #f57400; border: 7px solid #f57400; font-size: 40px ">--------------------------------------------------</p>
  <div>
    <h2>NavigationBar 界面</h2>
    <button @click="goLogin">如果没登录则重定向到登录界面</button>
  </div>
</template>


<style scoped>

</style>