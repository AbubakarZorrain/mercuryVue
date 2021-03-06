import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import aboutusPage from '@/components/aboutus'
import iptvPage from '@/components/iptv'
import projectPage from '@/components/projects'
import careerPage from '@/components/career'
import servicesPage from '@/components/services'
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { component } from 'vue/types/umd'
Vue.use(Router)
/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default new Router({
  /* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/about',
      name: 'about',
      component: aboutusPage
    },
    {
      path: '/iptv',
      name: 'iptvPage',
      component: iptvPage
    },
    {
      path: '/projects',
      name: 'projectPage',
      component: projectPage
    },
    {
      path: '/career',
      name: 'careerPage',
      component: careerPage
    },
    {
      path: '/services',
      name: 'servicesPage',
      component: servicesPage
    }
  ]
})
