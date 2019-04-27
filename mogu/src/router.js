import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Inddex/index.vue'
import Wo  from './components/My/wo.vue'
import Shangcheng  from './components/Market/shangcheng.vue'
import Zhibo  from './components/VideoView/zhibo.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () =>import('./components/Inddex/index.vue')
    },
    {
      path: '/index',
 
      component: Index
    },{
     
      path: '/wo',
      name:'wo',
      component:() =>import('./components/My/wo.vue')
    },{
     
      path: '/shangcheng',
      name:'shangcheng',
      component: () =>import('./components/Market/shangcheng.vue')

    },{
     
      path: '/zhibo',
      name:'zhibo',
      component:() =>import('./components/VideoView/zhibo.vue')

    }
   
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})