import Vue from 'vue'
import Router from 'vue-router'
// 从 vue-router 引入 路由插件 名字自定义成了Router
// import Home from './views/Home.vue'
import home from './components/home/home.vue'
import list from './components/list/list.vue'
import collect from './components/collect/collect.vue'
import add from './components/add/add.vue'

import index from './components/index.vue'
Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/home',
    //让index.vue 加载了之后再去加载vue
    // component:()=>import('./components/index.vue'),
    component:index,
    children:[{
      path: '/home',
      component:home,
      meta:{
        til:'首页'//内部属性自定义
      }
    },
    {
      path: '/list',
      component: list,
      meta:{
        til:'列表页'//内部属性自定义
      }
    },
    {
      path: '/collect',
      component: collect,
      meta:{
        til:'收藏页'//内部属性自定义
      }
    },
    {
      path: '/add',
      component: add,
      meta:{
        til:'添加页'//内部属性自定义
      }
    },]
  },
  {
  path:'/login',
  component: () => import('./components/login/login.vue')//路由的懒加载 只有走到login路径 才会去加载 对应的组件
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },{
    path:'/*',
    redirect:'/home'
  }
]
export default new Router({
  mode: 'hash',
  linkActiveClass:'current',
  base: process.env.BASE_URL,
  routes  
})