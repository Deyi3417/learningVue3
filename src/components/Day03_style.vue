<script>
export default {
  name: "Day03_style",
  data() {
    return{
      uTitle:'Class与Style02-style',
      message:'class-style learning'
    }
  }
}
</script>
<template>
  <h1>{{uTitle}}</h1>
<!--  第一种：放置字符串  -->
  <p style="font-size: 50px; color: yellowgreen" >{{message}}</p>
</template>


<style scoped>

</style>