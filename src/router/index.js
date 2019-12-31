import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home')
const TeachVideo = () => import('@/views/teachVideo/TeachVideo')
const videoDetail = () => import('@/views/teachVideo/childComps/videoDetail')
const Comment = () => import('@/views/comment/Comment')
const TeachData = () => import('@/views/teachData/TeachData')
const dataDetail = () => import('@/views/teachData/childComps/dataDetail')
const discussion = () => import('@/views/courseDiscussion/discussion')
const discussionDetail = () => import('@/views/courseDiscussion/childComps/discussionDetail')
const Me = () => import('@/views/me/Me')

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
  },
  {
    path: '/teachVideo/:id',
    component: videoDetail
  },
  {
    path: '/comment',
    component: Comment
  },
  {
    path: '/me',
    component: Me
  }
  ,
  {
    path: '/teachData',
    component: TeachData
  },
  {
    path: '/teachData/:id',
    component: dataDetail
  },
  {
    path: '/discussion',
    component: discussion,
  },
  {
    path: '/discussion/:id',
    name: 'discussionDetail',
    component: discussionDetail,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'//路由地址不以#的形式
})




export default router
