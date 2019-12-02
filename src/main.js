import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
//给vue添加axios的原型对象
// Vue.prototype.$http = axios
// axios本身不支持Vue.use方法，安装第三方库 vue-axios $ npm i -S vue-axios
Vue.use(VueAxios,axios)//这样vue实例中，多了两个原型方法 .$http  .axios 都是axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
