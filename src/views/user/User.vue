<script>
import axios from "axios";

export default {
  name: "User",

  setup() {

  },
  created() {
    console.log("---liudy23测试----")
    axios.get('/api/vue/list').then((res) => {
      console.log(res)
      console.log("--获取data--")
      console.log(res.data)
      console.log(res.data.data)
      console.log(res.data.code)
      console.log(res.data.message)
    })
  }

}
</script>
<template>
  <div>
    <p style="color: #b0213b; border: 7px solid #ff2fc4; font-size: 40px ">
      --------------------------------------------------</p>
    <div>
      <h2>User 界面</h2>
    </div>
  </div>

</template>


<style scoped>

</style>