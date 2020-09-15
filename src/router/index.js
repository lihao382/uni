import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from '../views/login'

import Index from '../views/uni_home/Index.vue'
import Shop from '../views/uni_home/Shop.vue'
import Orde from '../views/uni_home/Orde.vue'
import Member from '../views/uni_home/Member.vue'
import Setup from '../views/uni_home/Setup.vue'

import Index1 from '../views/uni_home/Index1.vue'
import Index2 from '../views/uni_home/Index2.vue'
import Index3 from '../views/uni_home/Index3.vue'

import Shop_index from '../views/shop_index/index.vue'
import Shop_index1 from '../views/shop_index/index1.vue'
import Shop_index2 from '../views/shop_index/index2.vue'
import Shop_index3 from '../views/shop_index/index3.vue'
import Shop_index4 from '../views/shop_index/index4.vue'

import Order_index from '../views/order/Index.vue'
import Order_index1 from '../views/order/Index1.vue'
import Order_index2 from '../views/order/Index2.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect:"index/index1",
    meta:{
      title:"UNI-ADMIN-首页"
    }, 
    children:[
      {
        path:"index",
        name:"index",
        component:Index,
        children:[
          {
            path:"index1",
            name:"index1",
            component:Index1,
          },
          {
            path:"index2",
            name:"index2",
            component:Index2
          },
          {
            path:"index3",
            name:"index3",
            component:Index3
          },
        ]

      },
      {
        path:"/shop",
        name:"shop",
        component:Shop,
        children:[
          {
            path:"/shop/shop_index",
            name:"shop_index",
            component:Shop_index
          },
          {
            path:"/shop/shop_index1",
            name:"shop_index1",
            component:Shop_index1
          },
          {
            path:"/shop/shop_index2",
            name:"shop_index2",
            component:Shop_index2
          },
          {
            path:"/shop/shop_index3",
            name:"shop_index3",
            component:Shop_index3
          },
          {
            path:"/shop/shop_index4",
            name:"shop_index4",
            component:Shop_index4
          },
        ]
      },
      {
        path:"/orde",
        name:"orde",
        component:Orde,
        children:[
          {
            path:"/orde/order_index",
            name:"order_index",
            component:Order_index
          },
          {
            path:"/orde/order_index1",
            name:"order_index1",
            component:Order_index1
          },
          {
            path:"/orde/order_index2",
            name:"order_index2",
            component:Order_index2
          },
        ]
      },
      {
        path:"/member",
        name:"member",
        component:Member
      },
      {
        path:"/setup",
        name:"setup",
        component:Setup
      },
    ]
  },
  {
    path:"/login",
    name:"login",
    component:Login,
    meta:{
      title:"UNI-ADMIN-登录页"
    }
  },
  {
    path:"*",
    redirect:"/index/index1"
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
