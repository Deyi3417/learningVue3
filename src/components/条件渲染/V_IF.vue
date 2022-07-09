<script>
export default {
  name: "V_IF",
  data() {
    return {
      uTitle: '条件渲染-（v-if）',
      changeFontSize:35,
      utitleStyleObj: {
        fontSize:'30px',
        color: 'red',
        border: '5px solid mediumpurple'
      },
    };
  },
}
</script>

<template>
<!--  <h1 style="color: #4568f5;border: 5px solid mediumpurple">{{ uTitle }}</h1>-->
  <h1 v-bind:style="[utitleStyleObj,{fontSize: changeFontSize + 'px'}]">{{ uTitle }}</h1>
  <button @click="changeFontSize++">字体增加</button>
  <button @click="changeFontSize--">字体减少</button>

</template>


<style scoped>

</style>