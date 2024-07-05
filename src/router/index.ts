import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const routeNames = {
  home: { path: '/', name: 'home', component: HomeView },
  todo: { path: '/app', name: 'app', component: () => import('../views/todo.vue') }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routeNames.home.path,
      name: routeNames.home.name,
      component: routeNames.home.component
    },
    {
      path: routeNames.todo.path,
      name: routeNames.todo.name,
      component: routeNames.todo.component
    }
  ]
})

export default router
