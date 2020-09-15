import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(elementUI)

import { registerMicroApps, start } from 'qiankun'

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:9000',
    container: '#vue',
    activeRule: '/vue',
    props: { a: 1 }
  }
]
console.log(__webpack_public_path__)
registerMicroApps(apps)
start({ prefetch: false, strictStyleIsolation: true })
// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
