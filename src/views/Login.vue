<script>
export default {
  name: "Login",
  methods:{
    backOne(){
      console.log("====登录界面测试--by liudy23====")
      console.log(this.$router)
      this.$router.go(-1)
    }
  },
}
</script>
<template>
  <p style="color: cornflowerblue; border: 5px">----------------------------------------</p>
  <div>
    <h2>登录界面</h2>
    <button @click="backOne">返回上级界面</button>
  </div>

</template>


<style scoped>

</style>