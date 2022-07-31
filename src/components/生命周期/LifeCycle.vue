<script>
import ChildLiftCycle from "./ChildLiftCycle.vue";
export default {
  name: "LifeCycle",
  components: {ChildLiftCycle},
  data() {
    return {
      uTitle: "生命周期钩子函数的基本使用",
      message: "liudy23",
      number: 0,
      isShow: true,
    }
  },
  beforeCreate() {
    console.log("beforeCreate已执行");
  },
  created() {
    console.log("created已执行");
  },
  beforeMount() {
    console.log("beforeMount已执行");
  },
  mounted() {
    console.log("mounted已执行");
  },
  beforeUpdate() {
    console.log("beforeUpdate已执行");
  },
  updated() {
    console.log("updated已执行");
  },
  beforeUnmount() {
    console.log("beforeUnmount已执行");
  },
  unmounted() {
    console.log("unmounted已执行");
  }


}
</script>
<template>
  <p style="color: #e87f3d; font-size: 30px; border: 3px solid mediumaquamarine">{{ uTitle }}</p>
  Vue文档链接：<a href="https://v3.cn.vuejs.org/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90"
             target="_blank">生命周期钩子</a><br>
  学习视频链接：<a href="https://www.bilibili.com/video/BV1QA4y1d7xf?p=41&vd_source=34ea8cac3a28f1df5cc57b063f27ea5a"
            target="_blank">Vue生命周期钩子函数的基本使用</a><br>
  <button @click="message = 'suyao'">改变message</button>
  <button @click="number++">改变number</button>
  <h3>{{ message }}</h3>
  <h3>{{number}}</h3>

  <child-lift-cycle v-if="isShow"></child-lift-cycle>
  <button @click="isShow = !isShow">组件控制器</button>



</template>


<style scoped>

</style>