<script>
import ChildComponent2 from "./ChildComponent2.vue";

export default {
  name: "ParentComponent",
  components: {ChildComponent2},
  data() {
    return {
      uTitle: "我是父组件",
      childParam_1: "",
      childParam_2: "父组件给子组件赋值",
      paramFromChild: {
        type: String,
        default: "deyi is so handsome",
      },
      listParam: [1, 2, 3, 4, 666, 999],
      aTestData: 666
    }
  },
  methods: {
    getDataFromChildComponent: function (value) {
      console.log("liudy23测试：" + value);
      this.paramFromChild = value;
    }
  },
  // 生命周期函数
  mounted() {
    // console.log(this.$refs.parentRef.aTestData);
    // console.log(this.$refs);
  }
}
</script>
<template>
  <!--
        父子组件的访问方式
        - 父组件访问子组件：$refs
          ref:用来给元素或者子组件注册引用信息--开发中常用

        - 子组件访问父组件：$parent
          在开发中尽量少用，组件复用性高

        - 子组件访问根组件：$root
  -->
  <div>
    <p style="color: green; font-size: 34px; border: 5px solid magenta">{{ uTitle }}</p>
  </div>
  <ChildComponent2 v-bind:child-param_2=childParam_2 :list-param="listParam"
                   @submitTable="getDataFromChildComponent" ref="parentRef"></ChildComponent2>
  <p ref="p"></p>
  <p>-----------------------------------------------</p>
  <h3>子组件传过来的值：{{ paramFromChild }}</h3>


</template>


<style scoped>

</style>