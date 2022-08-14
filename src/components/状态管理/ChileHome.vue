<script>
export default {
  name: "ChileHome",
  inject: ['store'],
  methods: {
    // 响应式的方法
    updateAge: function () {
      this.store.updateAge()
    }
  }
}
</script>

<template>
  <p style="color: yellowgreen; border: 7px solid cornflowerblue; font-size: 40px ">
    --------------------------------------------------</p>
  <div>
    <h2>ChildHome 界面</h2>
  </div>
  <div>{{ store.state.name }} -- {{ store.state.age }}</div>
  <button @click="updateAge">改变age</button>


</template>


<style scoped>

</style>