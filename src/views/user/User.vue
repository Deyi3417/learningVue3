<script>
import axios from "axios";
import store from "../../store";

export default {
  name: "User",
  inject: ['store'],

  data(){
    return{
      store
    }
  },
  created() {
    console.log("---liudy23测试----")
    axios.get('/api/vue/list').then((res) => {
      console.log(res)
      console.log("--获取data--")
      console.log(res.data)
      console.log(res.data.data)
      console.log(res.data.code)
      console.log(res.data.message)
      return res.data;
    }).then((res) => {
      // 将data存储到仓库
      console.log("----后台返回的数据封装到：res----")
      console.log(res)
      // store.state.userList =res.data;
      store.updateUserList(res.data)
    })
  }

}
</script>
<template>
  <div>
    <p style="color: #b0213b; border: 7px solid #ff2fc4; font-size: 40px ">
      --------------------------------------------------</p>
    <div>
      <h2>User 界面</h2>
    </div>
    <div>
      <ul>
        <li v-for="item in store.state.userList" :key="item.id">
          {{item.username}}--{{item.userAccount}}
        </li>
      </ul>
    </div>

  </div>

</template>


<style scoped>

</style>