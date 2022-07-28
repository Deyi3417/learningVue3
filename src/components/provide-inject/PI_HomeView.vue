<script>
import PI_Content from "./PI_Content.vue";

export default {
  name: "PI_HomeView",
  components: {PI_Content},
  data() {
    return {
      uTitle: "Provide-Inject学习-PI_HomeView",
      message: "deyi si so handsome",
      todos: ['Feed a cat', 'Buy tickets', 'Sing a song'],
      obj:{
        animal:['cat','dog','pig','tiger']
      }
    }
  },
  // 返回对象的形式 provide:{user: 'liudy23'}
  // 要访问组件实例 property，我们需要将 provide 转换为返回对象的函数：
  // 父组件不需要知道哪些子组件使用了它 provide 的 property
  // 子组件不需要知道 inject 的 property 来自哪里
  provide() {
    return {
      user: 'John Doe',
      age: 18,
      // 不能这样传值 message:this.message
      // todoLength: this.todos.length,
      // 实现provide / inject
      // 响应式对象方式
      obj:this.obj,
      // 函数返回响应式数据
      todos:() => this.todos
    }

  },

}
</script>
<template>
  <div>
    <p style="color: #e87f3d; font-size: 30px; border: 3px solid mediumaquamarine">{{ uTitle }}</p>
    <a href="https://v3.cn.vuejs.org/guide/component-provide-inject.html" target="_blank">VUE3
      Provide / Inject学习链接</a><br>
    {{ todos.length }}<br>

    <button @click="obj.animal.push('fish')">改变todos</button>
    <p>{{obj.animal}}</p>

    <PI_Content v-bind:childTitle="'子组件PI_Content'">

    </PI_Content>
  </div>

</template>


<style scoped>

</style>