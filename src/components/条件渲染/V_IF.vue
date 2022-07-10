<script>
export default {
  name: "V_IF",
  data() {
    return {
      uTitle: '条件渲染-（v-if）',
      changeFontSize:35,
      utitleStyleObj: {
        fontSize:'30px',
        color: 'red',
        border: '5px solid mediumpurple'
      },
      awesome:false,
      age:18,
      type:'D',
      v_show_ok:true,
      isShow:true,

    };
  },
}
</script>

<template>
<!--  <h1 style="color: #4568f5;border: 5px solid mediumpurple">{{ uTitle }}</h1>-->
  <h1 v-bind:style="[utitleStyleObj,{fontSize: changeFontSize + 'px'}]">{{ uTitle }}</h1>
  <button @click="changeFontSize++">字体增加</button>
  <button @click="changeFontSize--">字体减少</button>
  <p>https://v3.cn.vuejs.org/guide/conditional.html</p><br>
  <p style="color: red">v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。</p>

  <h1 v-if="awesome">Vue is awesome!😊</h1>
  <h1 v-else>Oh no 😢</h1>
  <button @click="awesome=!awesome">改变awesome</button>
  <h1 v-if="age > 18">我是成年人</h1>
<!--  使用 == 号equal-->
  <p v-else-if="age === 18">我今年刚好18岁</p>
  <h1 v-else>我是未成年人</h1>

<!--  在 <template> 元素上使用 v-if 条件渲染分组-->
  <template v-if="age <= 12">
    <p>只有小朋友才可以看动画片-猫和老鼠</p>
    <p>只有小朋友才可以看动画片-大力水手 </p>
  </template>

  <p>== 用于比较两者是否相等，忽略数据类型。</p>
  <p style="color: red">=== 用于更严谨的比较，值和值的数据类型都需要同时比较。</p>

  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C </div>

<!-- 另一个用于条件性展示元素的选项是 v-show 指令。用法大致一样： -->
<!--  注意，v-show 不支持 <template> 元素，也不支持 v-else。
v-show 只是简单地切换元素的 display CSS property。
<p style="display: none;">标题内容2：v-show</p>
不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中，使用场景：频繁切换状态-->
<!--  v-if：只要后面的为false，对应的元素以及子元素都不会被渲染，控制dom元素的创建和销毁，运行时条件很少改变的，一次性-->
  <p v-show="v_show_ok">v-show学习</p>
  <p v-if="isShow">标题内容1：v-if</p>
  <p v-show="!isShow">标题内容2：v-show</p>
  <button @click="isShow=!isShow">切换按钮</button>



</template>


<style scoped>

</style>