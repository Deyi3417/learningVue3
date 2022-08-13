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
  <h3>{{name}} -- {{password}}</h3>

</template>


<style scoped>

</style>