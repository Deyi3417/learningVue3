<script>
// 声明式渲染，可以提高开发效率
export default {
  uuName: "LearnDY",
  data() {
    return {
      num:6,
      uuName:'刘德意',
      age:'18',
      description:'so handsome',
      rawHtml:"<h1>v-html展示</h1>",
      vid:'d1',
      url:"https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/216834/34/18717/43927/62b1249bE4d06d4c8/5350e05165b6ac36.png.webp",
      verse:"翻转试测",
      attributeName:'vid'
    }
  },

  // methods 给Vue定义方法
  methods: {
    changeUserName: function () {
      // this指向Vue实例
      this.uuName='落苏谣'
    },
    colorChange: function () {
      this.vid = 'd2';
    },
    changeColor: function () {
      this.vid = 'd3';
    },
  }
}
</script>

<template>
  <div>{{ uuName }}</div>
  <div>{{age}}</div>
  <div>{{description}}</div>
<!--  当数据改变时，插值处的内容不会更新。-->
  <p v-once>{{ uuName }}</p>
  <button @click="changeUserName">点击改变名字</button>

  <p>Using mustaches: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
<!-- v-bind:动态的绑定属性的内容 -->
  <p id="d1">v-bind绑定</p>
  <p v-bind:id="vid">v-bind绑定02</p>
  <img v-bind:src="url" alt="">
  <button @click="colorChange">改变颜色</button>
<!--  简单的点击事件-->
  <button @click="this.vid='d2'">改变颜色v2</button>

<!--  使用 JavaScript 表达式-->
  <p>{{ verse.split('').reverse().join('') }}</p>
<!--  v-bind语法糖-->
  <p :id="vid">v-bind语法糖</p>
<!--  v-on 指令，它用于监听 DOM 事件-->
<!--  v-bind语法糖, @  -->
  <button v-on:click="changeColor">colorChange-English</button>
<!--  动态参数、动态属性-->
  <p v-bind:[attributeName]=vid>动态参数</p>
  <button @click="attributeName='class'">改变属性</button>

  <p>{{num + 2}}</p>
<!--  7.模板语法2 已结束 2022-07-01  -->

</template>

<style scoped>

#d1{
  color: #ff6701;
}

#d2{
  color: blue;
}

#d3{
  color: greenyellow;
}

.d1{
  font-size: 50px;
}

</style>