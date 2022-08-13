<script>
import {useRoute} from "vue-router/dist/vue-router";

export default {
  name: "About",
  mounted() {
    console.log("-*--*--*-")
    console.log(this.$route)
    console.log(this.$route.query)
    console.log(this.$route.query.name)
    console.log(this.$route.query.password)
  },
  methods: {
    goBack() {
      // 向前移动一条记录，与 router.forward() 相同
      // router.go(1)

      // 返回一条记录，与 router.back() 相同
      // router.go(-1)
      console.log("====liudy23测试====")
      console.log(this.$router)
      console.log("====liudy23测试02====" + this.$router.back)
      console.log(this.$router.back)
      // this.$router.back
      // this.$router.go(-1)
      // this.$router.back()
    }

  },

  setup() {
    // useRoute().query.password 使用useRoute()获取值
    console.log("----****----****----")
    console.log(useRoute())
    console.log(useRoute().query.name)
    console.log(useRoute().query.password)
    const name = useRoute().query.name
    const password = useRoute().query.password
    return {
      name, password
    }
  }
}
</script>
<template>
  <div>About-liudy23专用测试2</div>
  <h3>{{ name }} -- {{ password }}</h3>
  <button @click="goBack">返回</button>

</template>


<style scoped>

</style>