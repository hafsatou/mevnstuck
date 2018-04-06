import Vue from 'vue'
import Router from 'vue-router'
import ObstacleList from '@/components/ObstacleList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ObstacleList',
      component: ObstacleList
    }
  ]
})
