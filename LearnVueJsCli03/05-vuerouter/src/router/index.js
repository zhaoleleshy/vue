//配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'

/*import Home from '../components/Home'
import About from '../components/About'
import User from "../components/User";*/

const Home = () => import('../components/Home')

//1.通过Vue.use(插件),安装插件
Vue.use(Router)

//2.利用模块话思想导出,并且创建VueRouter对象
const router = new Router({
  //配置映射关系: 路由与组件之间的对应关系
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        /*{
          path: '',
          redirect: 'news'
        },*/
        {
          path: 'news',
          component: () => import('../components/HomeNews')
        },
        {
          path: 'message',
          component: () => import('../components/HomeMessage')
        }
      ]
    },
    {
      path: '/about',
      component: () => import('../components/About'),
      meta: {
        title: '关于'
      },
    },
    {
      path: '/user/:id',
      component: () => import('../components/User'),
      meta: {
        title: '用户'
      },
    },
    {
      path: '/profile',
      component: () => import('../components/Profile'),
      meta: {
        title: '档案'
      },
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})
//前置守卫(guard)
router.beforeEach((to, from, next) => {
  //从from到to
  document.title = to.matched[0].meta.title
  // console.log('++++');
  next()
})

//后置钩子(hook)
router.afterEach((to, from) =>{
  // console.log('------');
})
export default router

