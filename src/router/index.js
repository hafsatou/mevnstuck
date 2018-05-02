import Vue from 'vue'
import Router from 'vue-router'
import ObstacleList from '@/components/ObstacleList'
import ShowObstacle from '@/components/ShowObstacle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ObstacleList',
      component: ObstacleList
    },
    {
      path: '/show-obstacle/:id',
      name: 'ShowObstacle',
      component: ShowObstacle
    }
  ]
})
