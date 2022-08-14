// 1. 定义路由组件.
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// 1.1 也可以从其他文件导入
import About from "../views/About.vue";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import NotFound from "../views/NotFound.vue";
import News from "../views/News.vue";

// import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"
import Parent from "../views/Parent.vue";
import StyleOne from "../views/StyleOne.vue";
import styleTwo from "../views/StyleTwo.vue";
import Page from "../views/Page.vue";
import Login from "../views/Login.vue";
import NavigationBar from "../views/shop/NavigationBar.vue";
import SideBar from "../views/shop/SideBar.vue";
import ContentBar from "../views/shop/ContentBar.vue";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [

    {path: '/', component: Home},

    // {path: '/home', component: Home, name: 'home'},

    // 重定向 redirect 访问/home 后路径会跳转到/login
    {
        path: '/home',
        redirect: '/login'
    },
    // 重定向 redirect 访问/dy后路径会跳转到/about 可以是路径 也可以是对象{name:'about'}
    {
        path: '/dy',
        redirect: {name: 'about'}
    },

    // 甚至是一个方法，动态返回重定向目标：
    {
        path: '/fun',
        // 方法接收目标路由作为参数
        // return 重定向的字符串路径/路径对象
        redirect: (to) => {
            console.log("-----------liudy23测试-----------")
            console.log(to)

            // 不带参数的重定向
            // return {name: 'doLogin'}

            // 带参数的重定向
            return {name: 'liudy', params: {id: 999555}}

        }
    },

    {
        path: '/about',
        component: About,
        // 路由名称
        name: 'about',
        // 每路守卫 路由独享的守卫 beforeEnter 守卫 只在进入路由时触发，不会在 params、query 或 hash 改变时触发。
        beforeEnter: (to, from, next) => {
            console.log("----about: to from ----")
            console.log(to)
            console.log(from)
            // if ("条件不成立") {
            //     不放行
            // }
            if (123 === 1213) {
                next()
            }

        },
    },

    /*
     传用户id过来
     路径参数 用冒号 : 表示。当一个路由被匹配时，它的 params 的值将在每个组件中以 this.$route.params 的形式暴露出来。
     路由正则与重要参数：保证这个id只能传数字类型
     */
    {
        // name 在编程式导航 可以使用
        name: 'liudy',
        path: '/user/:uid',
        component: User,

        // 将 props 传递给路由组件
        // 请确保添加一个与路由参数完全相同的 prop 名
        props: true
    },

    {
        /*
        需求：动态路由的参数必须是数字 这些也可以通过在右括号后添加它们与自定义正则结合使用：
          // 仅匹配数字
          // 匹配 /1, /1/2, 等
          { path: '/:chapters(\\d+)+' },
          // 匹配 /, /1, /1/2, 等
          { path: '/:chapters(\\d+)*' },

          /1/2表示参数是由多个的使用id+  /news/:id+
          id* 表示参数可有可无

          你也可以通过使用 ? 修饰符(0 个或 1 个)将一个参数标记为可选：
          id? 表示参数可有可无 问好不可以有多个参数，不可以进行重复叠加

          请注意，（* 在技术上也标志着一个参数是可选的，但 ? 参数不能重复。）

          默认情况下，所有路由是不区分大小写的，并且能匹配带有或不带有尾部斜线的路由。例如，路由 /users 将匹配 /users、/users/、甚至 /Users/。
          这种行为可以通过 strict 和 sensitive 选项来修改，它们可以既可以应用在整个全局路由上，又可以应用于当前路由上：

         */
        path: '/news/:id(\\d+)*',
        component: News,
        name: 'syNews'
    },

    {
        path: '/parent',
        // 别名 通过别名，你可以自由地将 UI 结构映射到一个任意的 URL，而不受配置的嵌套结构的限制。
        alias: '/father',
        component: Parent,
        children: [
            // 当 /user/:id 匹配成功
            // UserHome 将被渲染到 User 的 <router-view> 内部
            {path: 'styleOne', component: StyleOne},

            // ...其他子路由
            {path: 'styleTwo', component: styleTwo},
        ],
    },

    {
        path: '/page',
        component: Page
    },

    {
        path: '/login',
        component: Login,
        name: 'doLogin'
    },

    {
        path: '/navigation',
        component: NavigationBar,
        name: 'navigation'
    },

    {
        path: '/side',
        component: SideBar,
        name: 'side'
    },

    {
        path: '/content',
        component: ContentBar,
        name: 'content'
    },

    // shop路由同时展示三个界面
    {
        path: '/shop',
        components: {
            // 访问/shop路径，默认弹出的界面是SideBar
            default: SideBar,
            // LeftSidebar: LeftSidebar 的缩写
            NavigationBar,
            // 它们与 `<router-view>` 上的 `name` 属性匹配
            ContentBar
        },
        // 路由组件传参 对于有命名视图的路由，你必须为每个命名视图定义 props 配置：
        // 对象模式：props: { newsletterPopup: false }
        // 函数模式：props: route => ({ query: route.query.q })
        props: {default: true, NavigationBar: false, ContentBar: false}
    },

    // 若路径都没有匹配到，跳转到NotFound页面
    {
        // 使用正则的方式，匹配任意的 404页面
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 不同的历史模式  hash 模式是用 createWebHashHistory() 创建的：
    // 它在内部传递的实际 URL 之前使用了一个哈希字符（#）。由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: createWebHashHistory(), routes, // `routes: routes` 的缩写
    // 历史模式: (Hash 模式) (HTML5 模式) 两种模式的区别是有无#号
    history: createWebHistory(), routes, // `routes: routes` 的缩写
})
//
// router.beforeEach((to, from) => {
//
//
// })

// 全局守卫
// router.beforeEach((to, from, next) => {
//     // ...
//     // 返回 false 以取消导航
//     // return false
//     console.log("--to--from--")
//     console.log(to)
//     console.log(from)
//     // if (to.name !== 'doLogin'){
//     //     next() // t通行证
//     // } else {
//     //     next()
//     // }
// })

export default router