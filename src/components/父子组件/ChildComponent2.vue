<script>
export default {
  name: "ChildComponent2",
  data() {
    return {
      uTitle: "我是子组件",
      toParentParams: "子组件提交给父组件的参数",
      aTestData: "测试数据"
    }
  },
  props: {
    childParam_1: {
      type: String,
      default: "childParam_1的默认参数",
      required: false
    },
    childParam_2: String,
    listParam: {
      // 对象或数组的默认值必须从一个工厂函数返回
      type: Array,
      default() {
        return []
      }
    },
  },

  methods: {
    submitDataToParentComponent: function () {
      this.$emit('submitTable', this.toParentParams)
    }
  },

  // 生命周期函数
  mounted() {
    // 不推荐此种方式获取父组件的值
    console.log(this.$parent.aTestData);
    // 根组件
    console.log(this.$root)
  }

}
</script>

<template>
  <div>
    <p style="color: #ea5938; font-size: 28px; border: 5px solid blueviolet">{{ uTitle }}</p>
    <h3>我是子组件ChildComponent</h3>
    <h4>{{ childParam_1 }}</h4>
    <h4>{{ childParam_2 }}</h4>
    <h4>{{ listParam }}</h4>
    <button @click="submitDataToParentComponent">子组件提交数据给父组件</button>
  </div>


</template>

<style scoped>

</style>