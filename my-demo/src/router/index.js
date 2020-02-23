import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import myself from '@/components/myself'
import home from '@/components/home'
import myhope from '@/components/myhope'
import mywork from '@/components/mywork'
import myskill from '@/components/myskill'
import linkme from '@/components/linkme'
import myexp from '@/components/myexp'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/myself',
      component: myself,
      redirect:"/home", //基本重定向
        children:[
            {
              path: '/home',
              component: home,
            },
            {
              path: '/mywork',
              component: mywork,
            },
            {
              path: '/myskill',
              component: myskill,
            },
            {
              path: '/linkme',
              component:linkme,
            },
            {
              path: '/myhope',
              component: myhope,
            },
            {
              path: '/myexp',
              component: myexp,
            },

        ]
    }
  ]
})
