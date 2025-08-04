import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: [
      { path: 'habits', name: 'Habits', component: () => import('../pages/HabitsPage.vue') },
      { path: 'settings', name: 'Settings', component: () => import('../pages/SettingsPage.vue') },
      { path: 'about', name: 'About', component: () => import('../pages/AboutPage.vue') },
      { path: 'progress', name: 'Progress', component: () => import('../pages/ProgressPage.vue') },
    ]
  },
  { path: '/login', name: 'Login', component: () => import('../pages/LoginPage.vue') },
  { path: '/signup', name: 'SignUp', component: () => import('../pages/SignUpPage.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
