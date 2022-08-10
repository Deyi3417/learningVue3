<script>
import {ref} from "vue";
import ContentProps from "./ContentProps.vue";

export default {
  name: "SetupProps",
  components: {ContentProps},
  data() {
    return {
      uTitle: "组合式API-setup中的参数props",
      uName: "liudy23",
      num02: 555,
    };
  },

  setup() {
    const num = ref(0);

    function changeNum() {
      num.value++;
      console.log("改变后num：" + num.value);
    }

    return {
      num,
      changeNum,
    };
  },

  methods: {
    changeNum02: function () {
      this.num02 = this.num02 + 5;
      console.log("改变后的num02: " + this.num02)
    },

    // 接收子组件传过来的值
    acceptChildValue: function (value) {
      console.log("acceptChildValue： " + value)
    }
  }
}
</script>
<template>
  <div>
    <p style="color: #e87f3d; font-size: 30px; border: 3px solid mediumaquamarine">{{ uTitle }}</p>
    学习视频链接：<a href="https://www.bilibili.com/video/BV1QA4y1d7xf?p=48&vd_source=34ea8cac3a28f1df5cc57b063f27ea5a"
              target="_blank">setup参数中props</a><br>
    <h3>{{ uName }}</h3>
    <h2>{{ num }}</h2>
    <h2>{{ num02 }}</h2>
    <button @click="changeNum">改变num</button>
    <br>
    引入子组件ContentProps:
    <ContentProps :uChildName="uName" :uChildNum="num" :uChildNum02="num02"
                  class="box" id="contentProps"
                  @injectCounter="acceptChildValue"
    ></ContentProps>
    <button @click="changeNum02">g改变num02</button>
  </div>


</template>


<style scoped>

</style>