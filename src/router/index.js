import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // Navbar Front Pages
    {
      path: '/',
      component: () => import('../views/Frontview.vue'),
      children : [
        {
          path: '',
          component: () => import('../views/UserHome.vue')
        },
        {
          path: '/products',
          component: () => import('../views/UserProducts.vue'),
        },
        {
          // 單一產品會使用動態路由
          path: 'product/:id',
          name: '單一產品內容',
          component: () => import('../views/ProductView.vue')
        },
        {
          path: '/FAQ',
          component: () => import('../views/FAQ.vue'),
        },
        {
          path: '/carts',
          component: () => import('../views/UserCart.vue'),
        },
        {
          path: '/cartorder',
          component: () => import('../views/CartOrder.vue'),
        },
        {
          path: '/checkorder/:id',
          name: '單一訂單內容',
          component: () => import('../views/CheckOrder.vue'),
        }
      ]
    },
    // 404頁面
  {
    path: '/:patMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
  ]
})

export default router
