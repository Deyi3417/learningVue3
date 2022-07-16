<script>
import Content from "./Content.vue";

export default {
  name: "MainComponents",
  components: {Content},
  data() {
    return {
      uTitle: "vue组件的基本使用",
      uMainComponents:"父组件mainComponents向子组件传值value_01",
      uMainComponents02:"父组件mainComponents向子组件传值value_02",
    };
  },
}
</script>

<template>
  <p style="color: red; font-size: 34px; border: 5px solid magenta">{{ uTitle }}</p>
  <a href="https://v3.cn.vuejs.org/guide/component-basics.html#%E5%9F%BA%E6%9C%AC%E7%A4%BA%E4%BE%8B" target="_blank" style="font-size: 18px">组件基础</a>
<!--  组件是带有名称的，可复用的实例，单独功能模块的封装-减少冗余，提高代码的复用性  -->
<!--    -->
  <Content v-bind:contentMessage_01 = 'uMainComponents'>dy:二级组件</Content>
  <Content v-bind:contentMessage_02 = 'uMainComponents02'>dy:二级组件</Content>
</template>


<style scoped>

</style>