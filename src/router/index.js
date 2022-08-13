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
import {createRouter, createWebHashHistory} from "vue-router"
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

    {
        path: '/about',
        component: About,
        // 路由名称
        name: 'about'
    },

    /*
     传用户id过来
     路径参数 用冒号 : 表示。当一个路由被匹配时，它的 params 的值将在每个组件中以 this.$route.params 的形式暴露出来。
     路由正则与重要参数：保证这个id只能传数字类型
     */
    {
        // name 在编程式导航 可以使用
        name: 'liudy',
        path: '/user/:id',
        component: User
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
        path:'/page',
        component: Page
    },

    {
        path: '/login',
        component: Login,
        name: 'doLogin'
    },

    {
        path:'/navigation',
        component: NavigationBar,
        name:'navigation'
    },

    {
        path:'/side',
        component: SideBar,
        name:'side'
    },

    {
        path:'/content',
        component: ContentBar,
        name:'content'
    },

    // shop路由同时展示三个界面
    {
        path:'/shop',
        components: {
            // 访问/shop路径，默认弹出的界面是SideBar
            default: SideBar,
            // LeftSidebar: LeftSidebar 的缩写
            NavigationBar,
            // 它们与 `<router-view>` 上的 `name` 属性匹配
            ContentBar
        }
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
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(), routes, // `routes: routes` 的缩写
})

export default router