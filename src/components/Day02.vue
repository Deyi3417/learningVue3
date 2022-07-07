<script>
export default {
  name: "Day02",
  data() {
    return {
      username:'Welcome to 德意的学习天地',
      message:'liudy yduil',
    };
  },
  // 方法
  methods:{

  },
  // 计算属性
  computed:{
    reverseMsg:function (){
      return this.message.split('').reverse().join('');
    }
  },

}
</script>

<template>
  <div>{{username}}</div>
  <p>翻转1：{{message.split('').reverse().join('')}}</p>
  <p>翻转2：{{reverseMsg}}</p>
</template>

<style scoped>

</style>