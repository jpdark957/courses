import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home')
const TeachVideo = () => import('@/views/teachVideo/TeachVideo')

//安装插件
Vue.use(VueRouter)

const routes = [
  {//设置默认路由
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/teachVideo',
    component: TeachVideo
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'//路由地址不以#的形式
})




export default router
