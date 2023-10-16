import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import userLogin from '@/views/userLogin.vue';
import dashboardPage from '@/views/dashboardPage.vue';
import productDetail from '@/views/productDetail.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: userLogin,
    
},
{
    path: '/dashboard',
    component: dashboardPage
},
{
  path: '/product/:id',
  name: 'productDetail',
  component: productDetail
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
