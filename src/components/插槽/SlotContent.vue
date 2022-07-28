<script>
export default {
  name: "SlotContent",
  data() {
    return {
      message: "子组件message",
      listParam: {
        type: Array,
        default() {
          return [];
        },
        required: false
      },
      listParam2: [3, 7, 1, 8],
    }
  },
  props: {
    childTitle: {
      type: String,
      default() {
        return [];
      },
      required: false
    }
  }
}
</script>
<template>
  <div>
    <p style="color: #e87f3d; font-size: 26px; border: 2px dashed mediumaquamarine">{{ childTitle }}</p>
    <!--   <slot></slot> 占位符   -->
    <!--  有时为一个插槽指定备用 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染。  -->
    <div>
      <slot name="header">
        <button>子组件默认按钮--备用内容</button>
      </slot>
    </div>
    <h4>我是子组件的测试内容 ---- 1</h4>
    <div>
      <slot name="main"></slot>
    </div>
    <h4>我是子组件的测试内容 ---- 2</h4>
    <div>
      <slot name="footer"></slot>
    </div>

    <div>
      <!--  数据提供给父组件
          name若没有，则父组件则是v-slot:default=""
        -->

      <slot name="listTest" :listKey="listParam2" :message="message"></slot>
    </div>
  </div>

</template>


<style scoped>

</style>