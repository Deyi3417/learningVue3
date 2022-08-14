<script>
import axios from "axios";

export default {
  name: "ChileHome",
  inject: ['store'],
  // http://localhost:9080/vue/list 获取用户数据 ajax axios
  // fetch 原生js 是http数据请求的一种方式
  // vue2 语法测试
  // axios 基于promise的http库
  created() {
    axios.get('/path/api/mmdb/movie/v3/list/hot.json?ct=长沙&ci=70&channelId=4').then((res) => {
      console.log(res);
    });
  },


  methods: {
    // 响应式的方法
    updateAge: function () {
      this.store.updateAge()
    }
  }
}
</script>

<template>
  <p style="color: yellowgreen; border: 7px solid cornflowerblue; font-size: 40px ">
    --------------------------------------------------</p>
  <div>
    <h2>ChildHome 界面</h2>
  </div>
  <div>{{ store.state.name }} -- {{ store.state.age }}</div>
  <button @click="updateAge">改变age</button>


</template>


<style scoped>

</style>