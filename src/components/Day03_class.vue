<script>
export default {
  name: "Day03_class",
  data() {
    return {
      uTitle:'Class与Style01-class',
      message:'liudy23',
      isActive2:true,
      isActive:true,
      error:6,
      classObject:{
        active:true,
        active02:true,
        active03:false
      }
    }
  },

  // 我们也可以在这里绑定一个返回对象的计算属性。这是一个常用且强大的模式：
  computed:{
    classObjectComputed:function () {
      return{
        active:this.isActive && !this.error,
        active03: this.error,
      }

    }
  },
}
</script>

<template>
  <h1>{{ uTitle }}</h1>
  <h1>{{ message }}</h1>
<!--  第一种：放置字符串-->
  <p class="active">样式测试1</p>
  <p class="active">{{ message }}</p>
<!--  第二种：放置对象 这种开发过程中是最常用的-->
<!--  :class (v-bind:class 的简写) 一个对象，以动态地切换 class：-->
<!--  <p :class="{类名：boolean类型的值}">样式测试2</p>-->
  <p :class="{active:isActive2}">样式测试2</p>
  <button @click="isActive2 = !isActive2">改变样式active-2</button>

  <p :class="{active:isActive, active02:isActive}">样式测试3</p>
  <button @click="isActive = !isActive">改变样式active-2-3</button>

<!--  和普通的类同时存在，会合并，不会产生冲突-->
  <p :class="{active:isActive}" class="active03">样式测试4</p>
<!--  属性太多，可以放置在一个对象里面-->
  <p :class="classObject">样式测试4</p>
<!--  我们也可以在这里绑定一个返回对象的计算属性。这是一个常用且强大的模式：-->
  <p :class="classObjectComputed">样式测试5</p>



</template>

<style scoped>
/*active 类名*/
.active{
  font-size: 24px;
  color: #4568f5;
}

.active02{
  background-color: #42b983;
}

.active03{
  background-color: #e1f87e;
  font-size: 48px;
}
</style>