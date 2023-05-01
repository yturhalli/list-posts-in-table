import Vue from 'vue'
import App from './App'
import { createPinia, PiniaVuePlugin } from 'pinia'

// Create store
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  pinia
})
