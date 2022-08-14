<script>
/*
Vue3 如何设置状态管理
provide 与 inject(注射、注入) -- 跨级通信
 */
import ChileHome from "./ChileHome.vue";
import store from "../../store";
export default {
  name: "StateManage",
  components: {ChileHome},
  provide:{
    store,
  },
}
</script>

<template>
  <div>
    <p style="color: #b0213b; border: 7px solid #ff2fc4; font-size: 40px ">
      --------------------------------------------------</p>
    <div>
      <h2>StateManage 界面</h2>
    </div>
    <ChileHome></ChileHome>
  </div>

</template>

<style scoped>

</style>