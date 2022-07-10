<script>
export default {
  name: "ArrayChange",
  data() {
    return {
      uTitle:'数组更新检测',
      arrayList:[ 'push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse' ],
    };
  },
  // push():方法可向数组的末尾添加一个或多个元素，并返回新的长度。
  // pop():方法用于删除数组的最后一个元素并返回删除的元素。
  // shift():方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
  // unshift():方法可向数组的开头添加一个或更多元素，并返回新的长度。
  // splice():方法用于添加或删除数组中的元素。
  // sort()
  // reverse()
  methods: {
    pushArray:function () {
      this.arrayList.push("liudy23","一键push多个元素");
    },
    popArray:function () {
      this.arrayList.pop();
    },
    shiftArray:function () {
      this.arrayList.shift();
    },
    unshiftArray:function () {
      this.arrayList.unshift("yangHuan");
    }
  }
}
</script>

<template>
  <p style="color: red;font-size: 30px;border: 5px solid rebeccapurple">{{uTitle}}</p>
  <div>
    <ul>
      <li v-for="item in arrayList" :key="item">{{item}}</li>
    </ul>
    <button @click="pushArray">push：添加数组元素(数组末尾)</button><br>
    <button @click="popArray">pop：删除数组元素(数组末尾)</button>
    <button @click="shiftArray">shift：删除数组元素(数组的第一个元素)</button>
    <button @click="unshiftArray">unshift：删除数组元素(数组的第一个元素)</button>
  </div>
</template>

<style scoped>

</style>