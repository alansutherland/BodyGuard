import Es6Promise from 'es6-promise'
Es6Promise.polyfill()

import "babel-polyfill"

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Landing from '@/components/Landing'
import Front from '@/components/Front'
import Module1 from '@/components/Module1'
import Module2 from '@/components/Module2'
import Module3 from '@/components/Module3'
import Module4 from '@/components/Module4'
import Module5 from '@/components/Module5'
import Module6 from '@/components/Module6'
import Module7 from '@/components/Module7'
// Module 2 subsections
import Continous from '@/components/Cont'
import PCA from '@/components/PC'
import TPN from '@/components/TP'
import Intermittent from '@/components/Int'
import Steps from '@/components/Step'
import Library from '@/components/Lib'
  
import VueMaterial from 'vue-material'
import '@/assets/sass/var.scss'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Landing},
    {path: '/front', component: Front},
    {path: '/module-1', component: Module1},
    {path: '/module-2', component: Module2},
    {path: '/module-2/continous', component: Continous},
    {path: '/module-2/pca', component: PCA },
    {path: '/module-2/tpn', component: TPN },
    {path: '/module-2/intermittent', component: Intermittent },
    {path: '/module-2/25-steps', component: Steps },
    {path: '/module-2/drug-library', component: Library },
    {path: '/module-3', component: Module3},
    {path: '/module-4', component: Module4},
    {path: '/module-5', component: Module5},
    {path: '/module-6', component: Module6},
    {path: '/module-7', component: Module7}
  ]
})

Vue.material.registerTheme('default', {
  primary: 'white',
  accent: 'orange',
  warn: 'blue',
  background: 'white'
})

const bus = new Vue()
Vue.prototype.$bus = bus

new Vue({
  router,
  components: {
    'app': App
  },
  template: `
    <div class="app">
    	<app></app>
    </div>
  `
}).$mount('#app')
