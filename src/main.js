import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from "element-ui"
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import '@/mock/mock'

Vue.use(ElementUi)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
