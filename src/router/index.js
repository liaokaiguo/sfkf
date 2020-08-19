import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from "@/components/Home";
import CompetitionDetail from '@/components/CompetitionDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/Home',
      name: 'Home',
      component: Home
    },
    {
      path:'/CompetitionDetail',
      name: 'CompetitionDetail',
      component: CompetitionDetail
    }
  ]
})
