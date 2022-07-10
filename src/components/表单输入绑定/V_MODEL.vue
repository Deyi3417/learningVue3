<script>
export default {
  name: "V_MODEL",
  data() {
    return {
      uTitle:'表单输入绑定v-model',
      msg:'',
    }
  },
  methods:{
    changeValue:function (e) {
      this.msg = e.target.value;

    }
  }
}
</script>

<template>
  <div>
    <p style="color: red; font-size: 34px; border: 5px solid magenta">{{uTitle}}</p>
    超链接几种选项：_blank _parent _self _top<br>
    点击跳转：<a href="https://v3.cn.vuejs.org/guide/forms.html" target="_blank" >表单输入绑定</a><br><br>

    <input type="text" v-model = "msg" placeholder="edit me">
    <h2>message is：{{msg}}</h2>
<!--  v-model 原理
    本质上是两个操作：
    1. v-bind绑定一个value属性
    2. v-on给当前元素添加一个input事件
  -->
<!--  无@input单方向的绑定 , -->
    <input type="text" :value="msg" @input="changeValue">
  </div>
</template>


<style scoped>

</style>