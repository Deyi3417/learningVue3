<script>
export default {
  name: "Day03",
  data() {
    return {
      uTitle:'侦听器',
      username:'Welcome to 德意的学习天地',
      message:'liudy23 is so handsome',
      // 传入一个对象-实体类
      User:{
        uName:'忠贤',
        uPassword:'root',
        uAge:'18'
      }
    };
  },
  // 方法
  methods:{
  },
  // 监听事件 监听数据的变化
  /*
  watch:{
    // 监听message的变化，只有message值发生了变化才会出发该函数
    message:function (newValue, oldValue) {
      console.log("新值：" + newValue);
      console.log("老值：" + oldValue);
      // 执行异步操作，或者复杂裸机代码--当值发送改变的时候
      // 使用 watch 选项允许我们执行异步操作 (访问一个 API)，并设置一个执行该操作的条件。
      if (newValue.length < 5 || newValue.length > 10) {
        console.log("输入的值不能小于5或者大于10");
      }
    }
  }

   */
  //  深度监听 监听一个变量的变化
  watch:{
    message:{
      // 初始化的时候调用函数
      immediate:true,
      handler:function (newValue) {
        console.log("当前值：" + newValue);
        if (newValue.length < 5 || newValue.length > 10) {
          if (newValue.length < 5) {
            console.log("输入的message的长度小于5");
          }else if (newValue.length > 10) {
            console.log("输入的message的长度大于10");
          }
        }
      }
    },
    // 监听不到一个对象中（User）属性的变化，需要使用到深度监听
    /*User:function (newValue) {
      console.log("默认值：" + newValue);
    }

     */

    /*
    User:{
      handler:function (newValue) {
        console.log("当前值：" + newValue.uName);
        // console.log("当前值：" + newValue.uName,newValue.uPassword);
      },
      // 是否开启深度监听，若开启，侦听器会一层一层向下遍历，给
      deep:true,
    }

     */
    // 监听单独的属性（加入一个对象有多个字段的情况）-- 使用字符串的形式进行优化，对单个属性进行监听
    "User.uAge":{
      handler:function (newValue) {
        console.log("当前值：" + newValue);
      },
      // 是否开启深度监听，若开启，侦听器会一层一层向下遍历，给
      deep:true,
    }


  }


}
</script>

<template>
  <h1>{{uTitle}}</h1>
  <h3>德意的学习天地</h3>
  <div>
    <p>{{message}}</p>
    <button  @click="message='开启监听事件'">改变message</button><br><br>
    <button  @click="message='liudy23'">重置message</button><br><br>
<!--    v-model：数据的双向绑定  -->
    请输入message：<input type="text" v-model="message">
  </div>

  <div>
    <p>{{User.uName}}</p>
    <p>{{User.uPassword}}</p>
    <button @click="User.uName='旭哲'">改变名字</button>
    <button @click="User.uName='忠贤'">恢复名字</button><br><br>
    <button @click="User.uAge='27'">改变uAge</button>
    <button @click="User.uAge='18'">恢复uAge</button>

  </div>

</template>

<style scoped>

</style>