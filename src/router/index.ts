import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import userLogin from '@/views/userLogin.vue';
import dashboardPage from '@/views/dashboardPage.vue';
import productDetail from '@/views/productDetail.vue';
import userSignup from '@/views/userSignup.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: dashboardPage,
    
},
{
    path: '/login',
    component: userLogin
},
{
  path: '/product/:id',
  name: 'productDetail',
  component: productDetail
}, 
{
  path: '/signup',
  name: 'userSignup',
  component: userSignup
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
