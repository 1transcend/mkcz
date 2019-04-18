import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import'./assets/css/swiper.min.css'

Vue.prototype.axios = axios;
axios.defaults.baseURL = 'http://39.105.94.90';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
