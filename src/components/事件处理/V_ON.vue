<script>
export default {
  name: "V_ON",
  data() {
    return {
      uTitle:'监听事件v-on',
      count:0,
      count02:0,
    }
  },
  methods: {
    addCounter:function () {
      this.count++;
    },
    addCounterWithParam (param) {
      this.count += param;
    },
    addCounterWithParamAndEvent (param,e) {
      this.count += param;
      console.log(e);
    },
    addCounter01 (param) {
      this.count02 += param;
    },
    divClick:function () {
      console.log('父元素展示');
    },
    btnClick:function () {
      console.log('子元素展示');
    },
    submitClick:function () {
      console.log('提交数据success');
    },
    keyUP:function () {
      console.log('键盘被按下，数据提交成功success');
    }
  }
}

</script>
<template>
  <div>
    <p style="color: red; font-size: 34px; border: 5px solid magenta">{{uTitle}}</p>
<!--  绑定事件，直接通过js代码处理  -->
    <h2 @click="count--">{{count}}</h2>
<!--  绑定事件，不传参  -->
    <h1 @click="addCounter">{{count}}</h1>
<!--  绑定事件，传参  -->
    <h1 @click="addCounterWithParam(3)">传参:{{count}}</h1>
<!--  绑定事件，传参的同时也要有事件对象  -->
    <h1 @click="addCounterWithParamAndEvent(5, $event)">传参的同时也要有事件对象:{{count}}</h1>

<!--  一个事件绑定多个处理函数  -->
    <h2>{{count02}}</h2>
<!--  一个事件绑定多个函数，函数后面需要添加括号（）  -->
    <h1 @click="addCounter(), addCounter01(5)">count:{{count}}--count02:{{count02}}</h1>

    <p style="color: #304aef; font-size: 25px; border: 5px solid #73efb1">1.事件修饰符</p>
    .stop
    .prevent
    .capture
    .self
    .once
    .passive<br>
    prevent：阻止默认事件（常用）；<br>
    stop：阻止事件冒泡（常用）；<br>
    once：事件只触发一次（常用）；<br>
    capture：使用事件的捕获模式；<br>
    self：只有event.target是当前操作的元素时才触发事件；<br>
<!-- 1. stop 阻止单击事件继续冒泡 -->
    <div @click="divClick">
      <button @click.stop="btnClick">按钮</button>
    </div>
<!-- 2. prevent 提交事件不再重载页面 -->
    <form action="">
      <input type="submit" value="提交" @click.prevent="submitClick">
    </form>
<!-- 3. once 点击事件将只会触发一次 -->
    <div @click.once="divClick">
      <button @click.stop.once="btnClick">只触发一次</button>
    </div>

    <p style="color: #304aef; font-size: 25px; border: 5px solid #73efb1">2.按键修饰符</p>
    .enter
    .tab
    .delete (捕获“删除”和“退格”键)
    .esc
    .space
    .up
    .down
    .left
    .right
<!-- 案件修饰符：.{keyCode} (键盘编码） | keyAlias(键盘的简写) 监听键盘的某个键帽  -->
    <p style="color: red">案件修饰符：.{keyCode} (键盘编码） | keyAlias(键盘的简写) 监听键盘的某个键帽</p>
    enter按键事件修饰符：<input type="text" @keyup.enter="keyUP"><br>
    delete按键事件修饰符： <input type="text" @keyup.delete="keyUP">
  </div>

</template>



<style scoped>

</style>