<script>
import {useRoute} from "vue-router/dist/vue-router";

export default {
  name: "User",
  data() {
    return {}
  },
  props: {},
  setup() {
    const id = 999;
    console.log(useRoute())
    console.log("=============测试1=============")
    console.log(useRoute().params)
    console.log("=============测试2=============")
    console.log("==测试获取值：{}", useRoute().params.id)
    const userId = useRoute().params.id

    return {
      id, userId
    }
  },

  mounted() {
    // this.$route.params $route 表示当前活跃的对象
    console.log(this.$route)
    console.log(this.$route.params)
    console.log(this.$route.params.id)
  }
}
</script>
<template>
  <div>I'm user, my name is liudy23</div>
  <h3>{{ id }}--{{ userId }}</h3>

</template>


<style scoped>

</style>