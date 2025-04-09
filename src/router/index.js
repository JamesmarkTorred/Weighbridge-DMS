import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/homepage/HomeView.vue'
import HomeCon from '@/views/homepage/HomeCon.vue'
import About from '../views/homepage/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home' // Redirect root to /home
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '', // This will be /home
          component: HomeCon,
          meta: { title: 'Dashboard' }
        },
        // Add other child routes here if needed
        {
          path: '/about', // This becomes /home/about
          name: 'about',
          component: About,
          meta: { title: 'About' }
        }
      ]
    },

    {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue'),
    meta: { 
      title: 'Login',
      requiresGuest: true,
      hideLayout: true 
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/RegisterView.vue'),
    meta: { 
      title: 'Register',
      requiresGuest: true,
      hideLayout: true 
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/auth/ForgotPasswordView.vue'),
    meta: { 
      title: 'Forgot Password',
      requiresGuest: true,
      hideLayout: true 
    }
  },
  {
    path: '/reset-password/:token',
    name: 'reset-password',
    component: () => import('@/views/auth/ResetPasswordView.vue'),
    meta: { 
      title: 'Reset Password',
      requiresGuest: true,
      hideLayout: true 
    }
  },

    // Dashboard route (standalone page)
    // router/index.js
  {
    path: '/dashboard',
    component: () => import('@/views/DashboardView.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/views/dashboard/DashboardLayout.vue'),
        meta: { title: 'Dashboard' }
      },
      // Add other dashboard child routes here
      
    ]
  },
  





   

   
  ]
})

export default router