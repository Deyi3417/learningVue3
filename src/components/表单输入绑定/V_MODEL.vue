<script>
export default {
  name: "V_MODEL",
  data() {
    return {
      uTitle:'表单输入绑定v-model',
      msg:'',
      checked:true,
    //  定义一个数组
      fruits:[],
      sex:'man'
    }
  },
  methods:{
    changeValue:function (e) {
      // console.log(e);
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
    <input type="text" :value="msg" @input="changeValue"><br>

<!--  复选框使用v-model
      单个复选框，v-model一个boolean值（如果v-model,绑定的是一个字符串,咱们绑定的值,会转成布尔值,
    选中就是true,不选择就是false）
-->
    <input type="checkbox" v-model="checked">{{checked}}
    <p style="font-size: 30px;"></p>
<!--  多个勾选框， fruits是一个空数组  -->
    <input type="checkbox" v-model="fruits" value="apple">苹果
    <input type="checkbox" v-model="fruits" value="banana">香蕉
    <input type="checkbox" v-model="fruits" value="peach">桃子
    <input type="checkbox" v-model="fruits" value="strawberry">草莓
    <input type="checkbox" v-model="fruits" value="lychee">荔枝
    <p style="font-size: 30px;">喜欢的水果：{{fruits}}</p>
<!--  单选框:记得v-model双向绑定，value：属性值要有  -->
    <input type="radio" v-model="sex" value="man">男
    <input type="radio" v-model="sex" value="woman">女
    <p style="font-size: 30px;">性别：{{sex}}</p>
  </div>
</template>


<style scoped>

</style>