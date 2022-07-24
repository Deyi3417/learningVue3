<script>
import ChildComponent from "./ChildComponent.vue";

// 这样写容易造成数据污染
const obj = {
  param: "666",
}
export default {
  name: "Content",
  components: {ChildComponent},
  // Prop 是你可以在组件上注册的一些自定义 attribute。为了给博文组件传递一个标题，我们可以用 props 选项将其包含在该组件可接受的 prop 列表中：-- 字符串数组传值
  // props:['contentMessage_01','contentMessage_02', 'staticValue'],
  props: {
    // 以对象的形式传值
    // 1. 类型的限制 2. 设置默认值 3. 是否必须
    contentMessage_01: String,
    contentMessage_02: String,
    staticValue: {
      type: String,
      default: "Prop标签：自定义传值（类型 type--默认值 default--是否必须 required）",
      required: false
    },
    // 对象或数组的默认值必须从一个工厂函数返回
    list: {
      type: Array,
      default: []
    }
  },

  data() {
    return {
      // 让每一个组件对象都返回一个新的对象，不会造成数据污染
      uTitle: "组件要展示的内容",
      param: "666",
    }
  },

  methods: {
    // 子组件中自定义方法将数据传给父组件
    // 1. 在子组件中，通过$emit来触发事件
    submitDataToParentComponent: function () {
      // this.$emit('自定义事件的名称','发送的事件参数');
      this.$emit('injectMessage', this.staticValue)
    }
  }
}
</script>

<template>
  <div>
    <h2>我是组件1——将展示内容：content-1</h2>
    <h3>{{ contentMessage_01 }}</h3>
    <h3>{{ contentMessage_02 }}</h3>
    <h3>{{ staticValue }}</h3>
    <p>{{ param }}</p>
    <button @click="param='落苏谣beautiful'">改变message</button>
    <button @click="param='lidy23 真帅'">改变message</button>
    <!--  组件是带有名称的，可复用的实例  -->
    <ChildComponent>dy:三级组件</ChildComponent>

    <!--  提交数据给父组件  -->
    <button @click="submitDataToParentComponent">提交数据给父组件</button>
  </div>
</template>


<style scoped>

</style>