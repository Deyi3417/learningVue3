<script>
import {reactive, ref, toRefs, watch} from "vue";

export default {
  name: "WatchAPI",
  data() {
    return {
      uTitle: "watch 响应式更改"
    }
  },

  setup() {
    // setup 中的 return
    let counter = ref(666);

    function changeCounter() {
      console.log(counter);
      console.log(counter.value);
      counter.value++;

    };

    // watch(侦听的响应式引用, 回调函数)
    watch(counter, (newValue, oldValue) => {
      console.log("测试setup中的watch:newValue=" + newValue + " oldValue=" + oldValue)
    });
    // watchEffect(只有回调函数)


    const user = reactive({
      name: "海马体",
      age: 18,
    });

    function changeUserName() {
      user.name = "天真蓝";
      user.age = 25;
    }

    return {
      counter, user,
      changeCounter, changeUserName

    };
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
  <h3>{{ counter }} -- {{ user.name }} -- {{ user }} -- {{ user.age }}</h3>
  <button @click="changeCounter">改变数字</button>
  <button @click="changeUserName">改变user</button>


</template>


<style scoped>

</style>