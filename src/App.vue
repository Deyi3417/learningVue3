<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
// import LearnDY from './components/LearnDY.vue'
import LearnDY from './components/LearnDY.vue'
// import Day02 from "./components/Day02.vue";
import Day03 from "./components/Day03.vue";
import V_IF from "./components/条件渲染/V_IF.vue";
import V_FOR from "./components/列表渲染/V_FOR.vue";
import ArrayChange from "./components/列表渲染/ArrayChange.vue";
import V_ON from "./components/事件处理/V_ON.vue";
import V_MODEL from "./components/表单输入绑定/V_MODEL.vue";
import MainComponents from "./components/组件基础/MainComponents.vue";
import Props from "./components/Props/Props.vue";
import ParentComponent from "./components/父子组件/ParentComponent.vue";
// import Day03_style from "./components/Day03_style.vue";
// import Day03_class from "./components/Day03_class.vue";
</script>

<template>
  <ParentComponent></ParentComponent>
<!--  <Day03></Day03>-->
<!--  <Props></Props>-->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
