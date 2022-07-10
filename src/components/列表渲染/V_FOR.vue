<script>
export default {
  name: "V_FOR",
  data() {
    return {
      uTitle:'列表渲染：v-for',
      changeFontSize:35,
      utitleStyleObj: {
        fontSize:'30px',
        color: 'red',
        border: '5px solid mediumpurple'
      },
      // 数组
      person:['赤焰','DG','Jing镜'],
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  },
  methods:{
    addPersonStartPosition:function () {
      // 数组最前面添加元素
      this.person.unshift("九夏光年")
    },
    addPersonEndPosition:function () {
      // 数组最前面添加元素
      this.person.push("北暮城南")
    }
  }
}
</script>
<template>
  <h1 :style="[utitleStyleObj,{fontSize: changeFontSize + 'px'}]">{{ uTitle }}</h1>
  <button @click="changeFontSize++">字体增加</button>
  <button @click="changeFontSize--">字体减少</button><br>
  <a href="https://www.runoob.com/jsref/jsref-obj-array.html" target="_blank">JavaScript Array 对象</a>
<!--  <img src="https://img0.baidu.com/it/u=3798217922,3880088897&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1657558800&t=5f259ee4fbda976ac2d5091d91bac2b2">-->
  <p style="color:red">
    v-for使用数组，v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。
  </p>
<!--  表格-->
<!--  为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一的 key attribute：-->
  <div>
    <ul id="array-with-index">
      <li v-for="(item, index) in person" :key="index">{{item}}--{{index}}</li>
    </ul>
    <ul id="array-with-index02">
<!--  key值的关键：记住勾选的内容
      key:唯一标识
      快速找到节点，减少渲染次数，提交渲染性能
-->
      <li v-for="(item, index) in person" :key="item"><input type="checkbox">{{item}}--{{index}}</li>
      <li v-for="(item, index) in person" :key="index"><input type="checkbox">{{item}}--{{index}}</li>
    </ul>
    <button @click="addPersonStartPosition">在数组开始位置添加元素</button>
    <button @click="addPersonEndPosition">在数组开始结束添加元素</button>


    <ul>
      <li v-for="(item, index) in items">{{item}}--{{index}}</li>
    </ul>
  </div>
  <div>
    <ul id="v-for-object" class="demo">
      <li v-for="value in myObject">
        {{ value }}
      </li>
    </ul>
    <ul id="v-for-object02" class="demo">
      <li v-for="(value,name,index) in myObject">
        {{index}}:{{name}}-{{ value }}
      </li>
    </ul>

<!--    input checkbox 复选框-->
    <ul id="v-for03">
      <li v-for="item in items">
        <input type="checkbox">{{item}}
      </li>
    </ul>
    <button @click="addPersonEndPosition">添加小伙伴</button>
  </div>

</template>



<style scoped>

</style>