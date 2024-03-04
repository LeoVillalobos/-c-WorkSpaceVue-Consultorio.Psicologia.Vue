/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/main",
    meta: {
      requiresAuth: true
    },
    redirect: "/main",
    component: () => import("@/layouts/FullLayout.vue"),
    children: [{
      path: "/",
      name: "Home",
      // route level code-splitting
      // this generates a separate chunk (Home-[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/pages/dashboard/Index.vue")
    }]
  },
  {
    path: "/auth",
    meta: {
      requiresAuth: true
    },
    redirect: "/auth",
    component: () => import("@/layouts/about/AboutLayout.vue"),
    children: [
      {
        path: "/auth/login",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/pages/auth/Index.vue")
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
