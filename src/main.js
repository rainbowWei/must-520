import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { axios } from './utils/axios'
import './styles/index.scss'

Vue.config.productionTip = false
Vue.use(axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
