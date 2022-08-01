<script>
import {reactive, ref, toRefs} from "vue";
export default {
  name: "WatchAPI",
  data() {
    return {
      uTitle: "watch 响应式更改"
    }
  },

  setup() {
    // setup 中的 return
    return {};
  },

  // watch函数 -- 选项式API
  watch: {},


}
</script>

<template>

  <p style="color: #e87f3d; font-size: 30px; border: 3px solid mediumaquamarine">{{ uTitle }}</p>
  Vue文档链接：<a
    href="https://v3.cn.vuejs.org/guide/composition-api-introduction.html#watch-%E5%93%8D%E5%BA%94%E5%BC%8F%E6%9B%B4%E6%94%B9"
    target="_blank">watch 响应式更改</a><br>
  学习视频链接：<a href="https://www.bilibili.com/video/BV1QA4y1d7xf?p=45&vd_source=34ea8cac3a28f1df5cc57b063f27ea5a"
            target="_blank">Vue组合式：在setup中使用watch</a><br>
  <h3>已经学习到第45节，在setup使用watch</h3>


</template>


<style scoped>

</style>