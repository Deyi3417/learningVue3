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
  // splice():方法用于添加或删除数组中的元素。删除-插入-替换元素
  // sort():
  // reverse():方法用于颠倒数组中元素的顺序
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
    },
    spliceArray:function () {
      /*
      1. 删除：
        第一个参数：表示开始插入或者开始删除的元素的位置下标；
        第二个参数：表示传入要删除几个元素（如果没有传，就删除后面的所有元素）
        // this.arrayList.splice(1);
        // this.arrayList.splice(1,2);
      2. 插入元素：
        第二个参数：传入0，后面接上要插入的元素
        // this.arrayList.splice(0,0,'德意','德春')
      3. 替换元素：
        第二个参数：表示我们替换几个元素，后面的参数表示用于替换前面的元素
        // this.arrayList.splice(0,2,'德意1','德春2')
       */
      this.arrayList.splice(0,2,'德意1','德春2')
    },
    sortArray:function () {
      this.arrayList.sort();
    },
    reverseArray:function () {
      this.arrayList.reverse();
    },
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
    <button @click="unshiftArray">unshift：数组的开头添加一个或更多元素</button><br>
    <button @click="spliceArray">splice：用于添加或删除数组中的元素</button><br>
    <button @click="sortArray">sort：排序</button>
    <button @click="reverseArray">reverse：翻转</button>
  </div>
</template>

<style scoped>

</style>