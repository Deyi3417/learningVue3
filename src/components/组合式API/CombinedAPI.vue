<script>
import {ref} from "vue";

export default {
  name: "CombinedAPI",
  data() {
    return {
      uTitle: "组合式API"
    }
  },

  props: {
    user: {
      type: String,
      default: "liudy23",
      required: false,
    }
  },


  /*
    setup最先开始执行,在 setup 中你应该避免使用 this，因为它不会找到组件实例。setup 的调用发生在 data property、computed property
    或 methods 被解析之前，所以它们无法在 setup 中被获取。
  */
  setup(props) {
    console.log("setup");
    // 常量赋值是不能被改变的 const是常量 let是变量
    const message = 'my name is liudy';
    console.log(message);
    console.log(props.user);

    // 定义一个变量
    let num = 666;
    console.log("num:" + num);

    /*
      带 ref 的响应式变量
      ref 接收参数并将其包裹在一个带有 value property 的对象中返回，然后可以使用该 property 访问或更改响应式变量的值：
      将值封装在一个对象中，看似没有必要，但为了保持 JavaScript 中不同数据类型的行为统一，这是必须的。
      这是因为在 JavaScript 中，Number 或 String 等基本类型是通过值而非引用传递的：
    */
    let num02 = ref(0);

    // 定义一个函数
    function changeNum() {
      // 使用setup改变num不是响应式的-- 变量是非响应式的
      num++;
      num02.value += 5;
      console.log("改变后的num:" + num + "--" + num02.value)
    }

    // 要传出去的值，使用return
    return {
      message, props, num, num02,
      changeNum
    };
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
}

</script>
<template>
  <p style="color: #e87f3d; font-size: 30px; border: 3px solid mediumaquamarine">{{ uTitle }}</p>
  Vue文档链接：<a
    href="https://v3.cn.vuejs.org/guide/composition-api-introduction.html#setup-%E7%BB%84%E4%BB%B6%E9%80%89%E9%A1%B9"
    target="_blank">组合式API</a><br>
  学习视频链接：<a href="https://www.bilibili.com/video/BV1QA4y1d7xf?p=42&vd_source=34ea8cac3a28f1df5cc57b063f27ea5a"
            target="_blank">Vue组合式API初体验</a><br>
  <p style="color: red">-------------------------------------------------------------------------------------------</p>
  <!--  num02模板会自动解析value值  -->
  <h3>{{ message }}--{{ props }}--{{ num }}--{{ num02 }}</h3>
  <button @click="changeNum">改变number</button>
  <p style="color: yellowgreen; font-size: 30px">-------------------------------------------------------------------------------------------</p>
  <h3 style="color: #e87f3d">已经学习到：44.vue3组合式API在setup中定义变量</h3>


</template>


<style scoped>

</style>