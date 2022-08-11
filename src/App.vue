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
import SlotContent from "./components/插槽/SlotContent.vue";
import SlotParentComponent from "./components/插槽/SlotParentComponent.vue";
import PI_HomeView from "./components/provide-inject/PI_HomeView.vue";
import LifeCycle from "./components/生命周期/LifeCycle.vue";
import CombinedAPI from "./components/组合式API/CombinedAPI.vue";
import WatchAPI from "./components/组合式API/WatchAPI.vue";
import SetupProps from "./components/组合式setup/SetupProps.vue";
import RouterVue from "./router/RouterVue.vue";
// import Day03_style from "./components/Day03_style.vue";
// import Day03_class from "./components/Day03_class.vue";
</script>

<template>
  <RouterVue></RouterVue>
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
