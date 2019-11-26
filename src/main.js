import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import overall from './components/content/overall/Overall'//引用文件

Vue.prototype.overall = overall//挂载到Vue实例上面

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

