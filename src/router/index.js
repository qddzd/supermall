import Vue from 'vue';
import vuerouter from 'vue-router';

//路由懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

//1.安装插件
Vue.use(vuerouter);

//2.创建router
const routes = [
    {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/category',
        component: Category
      },
      {
        path: '/cart',
        component: Cart
      },
      {
        path: '/profile',
        component: Profile
      }
]
const router = new vuerouter({
    routes,
    mode:'history'
})
//3.导出
export default router