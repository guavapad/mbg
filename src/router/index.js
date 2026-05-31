import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../view/auth/LoginPage.vue'
import UserManagement from '../view/superadmin/UserManagement.vue'
import AddUser from '../view/superadmin/AddUser.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },

  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      hideLayout: true,
      title: 'Login'
    }
  },

  {
    path: '/admin/users',
    name: 'users.index',
    component: UserManagement,
    meta: {
      title: 'User Management',
      breadcrumb: [
        { name: 'User Management' }
      ]
    }
  },

  {
    path: '/admin/users/create',
    name: 'users.create',
    component: AddUser,
    meta: {
      title: 'Tambah User',
      breadcrumb: [
        { name: 'User Management', path: '/admin/users' },
        { name: 'Tambah User' }
      ]
    }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})