<script>
import PI_Hello from "./PI_Hello.vue";
export default {
  name: "PI_Content",
  components: {PI_Hello},
  data() {
    return {
      uTitle:"Provide-Inject学习-PI_Content"
    }
  },
  props: {
    childTitle: {
      type: String,
      default() {
        return [];
      },
      required: false
    }
  }
}
</script>
<template>
  <div>
    <p style="color: cornflowerblue; font-size: 28px; border: 2px dashed mediumaquamarine">{{childTitle}}</p>
    <PI_Hello v-bind:child-title02="'子组件PI_Hello'"></PI_Hello>

  </div>
</template>


<style scoped>

</style>