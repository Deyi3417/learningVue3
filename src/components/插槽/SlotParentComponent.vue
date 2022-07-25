<script>
// 引入子组件依赖
import SlotContent from "./SlotContent.vue";

export default {
  name: "SlotParentComponent",
  // 注册子组件
  components: {SlotContent},
  data() {
    return {
      uTitle: "插槽学习-父组件",
      message:"父组件message"
    }
  }
}
</script>
<template>
  <p style="color: #e87f3d; font-size: 30px; border: 2px dashed mediumaquamarine">{{ uTitle }}</p>
  <a href="https://v3.cn.vuejs.org/guide/component-slots.html#%E6%8F%92%E6%A7%BD%E5%86%85%E5%AE%B9" target="_blank">VUE3
    插槽官网学习链接</a>
  <SlotContent v-bind:childTitle="'子组件插槽-slot位置：header'">
<!--  注意，v-slot 只能添加在 <template> 上  -->
    <template v-slot:header>
      <button>header 按钮{{message}}</button>
    </template>
  </SlotContent>
  <SlotContent v-bind:childTitle="'子组件插槽-slot位置：main'">
    <template v-slot:main>
      main <input type="text" placeholder="edit">
    </template>
  </SlotContent>
  <SlotContent  v-bind:childTitle="'子组件插槽-slot位置：footer'">
    <template v-slot:footer >
      <p>footer: 一个slot可以插入多个值，但是同时放入组件进行替换，一起作为替换元素</p>
    </template>
  </SlotContent>
  <p style="border: 1px dashed mediumaquamarine"></p>

<!-- 无序列表 -->
  <SlotContent v-bind:childTitle="'无序列表'" >
    <template v-slot:listTest="slotProps">
      {{slotProps.listKey}}
    </template>
  </SlotContent>

<!-- 有序列表 -->
  <SlotContent  v-bind:childTitle="'有序列表'">

  </SlotContent>
<!--  已经学习到地38节，插槽备用内容和作用域插槽的使用  -->
  <SlotContent v-bind:child-title="'已经学习到地38节，插槽备用内容和作用域插槽的使用'"></SlotContent>
</template>


<style scoped>

</style>