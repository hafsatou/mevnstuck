import Vue from 'vue'
import Router from 'vue-router'
import ObstacleList from '@/components/ObstacleList'
import ShowObstacle from '@/components/ShowObstacle'
import CreateObstacle from '@/components/CreateObstacle'
import EditObstacle from '@/components/EditObstacle'

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
    },
    {
      path: '/add-obstacle',
      name: 'CreateObstacle',
      component: CreateObstacle
    },
    {
      path: '/edit-obstacle/:id',
      name: 'EditObstacle',
      component: EditObstacle
    }
  ]
})
