import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../view/auth/LoginPage.vue'
import UserManagement from '../view/superadmin/UserManagement.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/admin/users',
    component: UserManagement
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})