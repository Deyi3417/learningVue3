<script>
export default {
  name: "Day02",
  data() {
    return {
      uTitle:'计算属性',
      username:'Welcome to 德意的学习天地',
      message:'liudy yduil',
    };
  },
  // 方法
  methods:{
    reverseMessage:function () {
      return this.message.split('').reverse().join('');
    }
  },
  // 计算属性 --只要依赖值不变，就不会重新计算，有缓存-计算属性将基于它们的响应依赖关系缓存，提高性能
  // 计算属性一般没有setter方法，计算属性只读属性
  computed:{
    // 简写
    // reverseMsg:function (){
    //   return this.message.split('').reverse().join('');
    // }
    // 每一个计算属性中都有一个getter 和 setter方法
    reverseMsg:{
      // get:function () {
      //   return this.message.split('').reverse().join('');
      // }
      // 完整的写法
      get() {
        return this.message.split('').reverse().join('');
      },
      // 在设置或者更改计算属性的时候调用
      set(newValue) {
        console.log(newValue);
        this.message=newValue;
      }

    }
  }

}
</script>

<template>
  <h1>{{uTitle}}</h1>
  <div>{{username}}</div>
  <p>{{message}}</p>
<!-- 第一种： js 表达式 -->
  <p>翻转1：{{message.split('').reverse().join('')}}</p>
<!-- 第二种： 使用计算属性 -->
  <p>翻转2：{{reverseMsg}}</p>
<!-- 第三种： 使用methos中的方法 -->
  <p>翻转3：{{reverseMessage()}}</p>

  <button @click="message = 'suyao oayus'">点击改变message</button><br>
  <button @click="reverseMsg = '你好'">点击改变message</button>

<!--  下一节课：watch侦听器的使用P11-->
</template>

<style scoped>

</style>