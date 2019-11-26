import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import overall1 from './components/content/overall/Overall2'//引用文件
// import overall from './components/content/overall/Overall'//引用文件

// Vue.prototype.overall = overall1//挂载到Vue实例上面

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

