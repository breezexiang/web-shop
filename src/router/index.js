import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import category from '@/pages/category/category'
import shopcart from '@/pages/shopcart/shopcart'
import user from '@/pages/user/user'
import userLogin from '@/pages/user/child/login'
import userRegister from '@/pages/user/child/register'
import userInfo from '@/pages/user/child/userInfo'
import shipping from '@/pages/user/child/shipping'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: index
        },{
            path: '/category',
            component: category
        },{
            path: '/shopcart',
            component: shopcart
        },{
            path: '/user',
            meta: {
                navShow: true
            },
            component: user,
            children: [
                {
                    path: 'login',
                    meta: {
                        navShow: false,
                    },
                    component: userLogin
                },
                {
                    path: 'register',
                    meta: {
                        navShow: false
                    },
                    component: userRegister
                },
                {
                    path: 'userInfo',
                    meta: {
                        navShow: false
                    },
                    component: userInfo
                },
                {
                    path: 'shipping',
                    meta: {
                        navShow: false
                    },
                    component: shipping
              }
            ]
        }
    ]
})
