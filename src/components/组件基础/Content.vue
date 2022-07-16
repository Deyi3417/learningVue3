<script>
import ChildComponent from "./ChildComponent.vue";

// 这样写容易造成数据污染
const obj = {
  param:"666",
}
export default {
  name: "Content",
  components: {ChildComponent},
  // Prop 是你可以在组件上注册的一些自定义 attribute。为了给博文组件传递一个标题，我们可以用 props 选项将其包含在该组件可接受的 prop 列表中：
  props:['contentMessage_01','contentMessage_02', 'staticValue'],

  data() {
    return {
      // 让每一个组件对象都返回一个新的对象，不会造成数据污染
      uTitle:"组件要展示的内容",
      param: "666",
    }
  }
}
</script>

<template>
  <div>
    <h2>我是组件1——将展示内容：content-1</h2>
    <h3>{{contentMessage_01}}</h3>
    <h3>{{contentMessage_02}}</h3>
    <h3>{{staticValue}}</h3>
    <p>{{param}}</p>
    <button @click="param='落苏谣beautiful'">改变message</button>
    <button @click="param='lidy23 真帅'">改变message</button>
<!--  组件是带有名称的，可复用的实例  -->
    <ChildComponent>dy:三级组件</ChildComponent>
  </div>
</template>


<style scoped>

</style>