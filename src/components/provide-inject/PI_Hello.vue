<script>
export default {
  name: "PI_Hello",
  data() {
    return {
      uTitle: "Provide-Inject学习-PI_Hello",
    }
  },
  // 孙子-hello 父亲-content 爷爷-homeView（孙获取爷爷传递的值）
  inject: ['user', 'age', 'todoLength', 'obj', 'todos'],
  props: {
    childTitle02: {
      type: String,
      default() {
        return [];
      },
      required: false
    }
  },
  computed: {
    newTodos: function () {
      return this.todos();
    }

  }
}
</script>
<template>
  <div>
    <p style="color: #e87f3d; font-size: 24px; border: 2px dashed mediumaquamarine">{{ childTitle02 }}</p>
    <!--  获取爷爷传递过来的值  -->
    <h3>{{ `Injected property: ${this.user}--${this.age}--${this.obj.animal}--` }}</h3>
    <!--  响应函数式 {{放置变量即可}} -->
    <h3>1. {{ todos() }}</h3>
    <h3>2. {{ newTodos }}</h3>
    <h3>3. {{ newTodos }}</h3>

  </div>

</template>


<style scoped>

</style>