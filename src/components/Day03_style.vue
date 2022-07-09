<script>
export default {
  name: "Day03_style",
  data() {
    return {
      uTitle: 'Class与Style02-style',
      message: 'class-style learning',
      activeStyleColor: 'yellowgreen',
      fontSize: 28,
      fontSize02: '28px',
      bgColor: 'gray',
      testColor:"blue",
      testBorder:'5px solid mediumpurple',
      //  以对象的形式
      styleObject: {
        color: 'red',
        fontSize: 30 + 'px',
        backgroundColor: 'pink'
      },
    };
  }
}
</script>
<template>
  <h1>{{ uTitle }}</h1>
  <!--  第一种：放置字符串  -->
  <p style="font-size: 50px; color: yellowgreen">{{ message }}</p>
  <!--  第二种：放置对象  -->
  <p :style="{color:activeStyleColor,fontSize:fontSize02}">style样式学习02-放置对象</p>
  <p :style="{color:activeStyleColor,fontSize:fontSize + 'px'}">style样式学习03-放置对象</p>
  <button @click="fontSize++">字体增加</button>
  <button @click="fontSize--">字体减少</button>
  <p :style="{color:activeStyleColor,fontSize:fontSize + 'px',backgroundColor:bgColor}">style样式学习04-放置对象</p>

  <p :style="styleObject">styleObject-style05</p>
<!--  总结-->
<!--  CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名：-->
<!--  <p :style="{key(css属性名):value(属性值-对象), fontSize:50+'px'}">style 对象</p>-->
  <p v-bind:style="styleObject">v-bind-01</p>
  <p style="font-size:15px;border: 5px solid mediumpurple">v-bind:style缩写:style</p>
  <p :style="{color:testColor, fontSize:50+'px', border:testBorder}">style 对象</p>
</template>


<style scoped>

</style>