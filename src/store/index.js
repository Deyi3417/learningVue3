// 状态的集中管理
// 1. 数据实现响应式
// ref reactive --->对象中存储这状态message,age,counter

import {reactive} from "vue";

const store = {
    state: reactive({
        name: "liudy23",
        age: 18
    }),

    // 定义一个函数
    updateAge: function () {
        this.state.age = 9
    },
}

// 2. 如何再APP组件中通过provide提供
export default store