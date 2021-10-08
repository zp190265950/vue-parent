import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(elementUI)

import { registerMicroApps, start } from 'qiankun'

const isPro = process.env.NODE_ENV === 'production'
// const entry = isPro ? '//8.129.230.32:8081/vue/' : '//192.168.0.119:8081/vue/'
const entryPaper = isPro ? 'asdf' : '//192.168.0.119:8050/paper-generation/'

const apps = [
  {
    name: 'paper',
    entry: entryPaper,
    container: '#paper',
    activeRule: '/parent/paper',
    props: { a: 1 }
  }
  // {
  //   name: 'paper-generation',
  //   entry: entryPaper,
  //   container: '#paper-generation',
  //   activeRule: '/parent/paper-generation',
  //   props: { a: 1 }
  // }
]
console.log(__webpack_public_path__)
registerMicroApps(apps)
start()
// start({ prefetch: true, strictStyleIsolation: true })
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
