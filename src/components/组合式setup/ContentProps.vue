<script>
import {onUpdated, ref, toRefs} from "vue";

export default {
  name: "ContentProps",
  // 以对象的形式接收到值
  props: {
    uChildName: {
      type: String,
      default: "哈哈",
    },
    uChildNum: {
      type: Number,
      default: 666,
    },
    uChildNum02: {
      type: Number,
      default: 888,
    },
    uChildNum03: {
      type: Number,
      default: 999,
    }
  },
  data() {
    return {
      contentMessage: "I'm ContentProps",

    }
  },
  // setup不能通过this访问到，引文setup组件创建之前就执行了，this拿不到数据
  // setup中props接收父组件传过来的值
  setup(props, context) {

    /**
     * props
     */
    // console.log("setup测试01：" + props);
    // console.log(props);
    // console.log("setup测试02：" + props.uChildName);
    // 不会发生改变 需要使用 toRefs
    // const {uChildNum02} = props;
    // console.log(uChildNum02)
    // onUpdated(() => {
    //   console.log(uChildNum02)
    // });

    // const {uChildNum02} = toRefs(props);
    // console.log(uChildNum02)
    // onUpdated(() => {
    //   console.log(uChildNum02)
    //   console.log(uChildNum02.value)
    // });
    /**
     * context
     */
    const counter = ref(68);
    function changeCounter() {
      counter.value += 5;
    }

    console.log(context)
    // Attribute (非响应式对象，等同于 $attrs) 获取属性
    console.log(context.attrs)

    // 插槽 (非响应式对象，等同于 $slots)
    console.log(context.slots)

    // 触发事件 (方法，等同于 $emit)
    console.log(context.emit)

    // 将counter值传给父组件
    function sendParent() {
      context.emit('injectCounter', counter.value)
    }


    // 暴露公共 property (函数) 属性
    console.log(context.expose)

    return {
      counter,
      sendParent, changeCounter
    }
  },
  mounted() {
    console.log("生命周期mounted:" + this.uChildName);
  }
}
</script>
<template>
  <div>
    {{ contentMessage }} -- {{ uChildNum }} -- {{ uChildNum02 }} -- {{ counter }}<br>
    <button @click="sendParent">发送数据给父组件</button>
    <button @click="changeCounter">改变counter</button>


  </div>

</template>


<style scoped>

</style>