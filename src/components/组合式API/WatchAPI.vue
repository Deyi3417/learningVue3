<script>
import {computed, reactive, ref, toRefs, watch, watchEffect} from "vue";

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


    // user属性
    const user = reactive({
      name: "海马体",
      age: 18,
    });

    function changeUserName() {
      user.name = "天真蓝";
      user.age = 25;
    };

    // watchEffect(只有回调函数) 注意watchEffect不需要指定监听的属性，组件初始化的时候会执行一次回调函数 自动收集依赖
    watchEffect(() => {
      console.log("watchEffect测试：" + user.name);
    })


    // message属性
    const message = ref("Hello Vue Learning");
    const reverseMessage = computed(() => {
      return message.value.split("").reverse().join("");
    });
    console.log("reverseMessage: " + reverseMessage);
    console.log("reverseMessage: " + reverseMessage.value);


    /*
    watch 和 watchEffect 区别：
      1. watchEffect不需要指定监听的属性，自动收集依赖，只需要再回调函数中引用到了响应式的属性，只要这些属性方式改变，回调就会执行
        watch只能监听指定的属性，做出回调函数的执行，可以侦听多个Vue3开始后
      2. watch可以获取到新值和旧值，watchEffect拿不到
      3. watchEffect在组件初始化的时候就会自动执行一次，用来收集依赖，watch不需要，一开始就执行
     */

    return {
      counter, user, message,
      changeCounter, changeUserName, reverseMessage,
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
  <h3>{{ counter }} -- {{ user.name }} -- {{ user }} -- {{ user.age }} -- {{ message }}</h3>
  <button @click="changeCounter">改变数字</button>
  <button @click="changeUserName">改变user</button>
  <p style="color: yellowgreen; font-size: 30px">
    ----------------------------- 在setup中使用computed -----------------------------</p>
  <button @click="reverseMessage">反转message</button>


</template>


<style scoped>

</style>