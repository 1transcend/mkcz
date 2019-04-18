import Vue from 'vue'
import Router from 'vue-router'
import index from './views/article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/article',
      name: 'article',
      // route level code-splitting
      // this generates a separate chunk (article.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "article" */ './views/article.vue')
    },
    {
      path: '/article-details',
      name: 'article-details',
      // route level code-splitting
      // this generates a separate chunk (article-details.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "article-details" */ './views/article-details.vue')
    },
    {
      path: '/product',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (product.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "product" */ './views/product.vue')
    },
    {
      path: '/product-details',
      name: 'product-details',
      // route level code-splitting
      // this generates a separate chunk (product-details.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "product-details" */ './views/product-details.vue')
    }
  ]
})
