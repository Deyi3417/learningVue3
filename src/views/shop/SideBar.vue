<script>
export default {
  name: "SideBar"
}
</script>
<template>
  <p style="color: cornflowerblue; border: 7px solid cornflowerblue; font-size: 40px ">--------------------------------------------------</p>
  <div>
    <h2>SideBar 界面</h2>
    <router-view name="NavigationBar"></router-view>
    <router-view name="ContentBar"></router-view>
  </div>

</template>


<style scoped>

</style>