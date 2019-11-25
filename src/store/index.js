import Vue from 'vue'
import Vuex from 'vuex'

//安装插件vuex
Vue.use(Vuex)


//创建Store对象
const state= {

}

const store = new Vuex.Store ({
  state,
  // mutations,
  // actions,
  // getters
})

//挂载vuex实例上
export default store