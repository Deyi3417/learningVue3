<!--
选项式API
<script>
import {useRoute} from "vue-router/dist/vue-router";

export default {
  name: "User",
  data() {
    return {}
  },
  props:['uid'],
  setup() {
    const id = 999;
    // useRoute() 使用useRoute()可以获取传过来的值 router全局的 route局部的
    console.log(useRoute())
    console.log("=============测试1=============")
    console.log(useRoute().params)
    console.log("=============测试2=============")
    console.log("==测试获取值：{}", useRoute().params.id)
    const userId = useRoute().params.uid

    return {
      id, userId
    }
  },

  mounted() {
    // this.$route.params $route 表示当前活跃的对象
    console.log(this.$route)
    console.log(this.$route.params)
    console.log(this.$route.params.uid)
    console.log('----++++----')
    console.log(this.uid)
  }
}
</script>
-->
<!--  组合式API  -->
<script setup>
  import {useRoute} from "vue-router/dist/vue-router";
  import {defineProps} from "vue";

  console.log(useRoute().params.uid);
  // 接受的参数，配合// 请确保添加一个与路由参数完全相同的 prop 名----props: true 使用
  const props = defineProps({
    uid: String
  });
  console.log("liudy23测试----defineProps----")
  console.log(props)
</script>
<template>
  <div>I'm user, my name is liudy23</div>
  <h3>{{ uid }}--{{ uid }}</h3>

</template>


<style scoped>

</style>