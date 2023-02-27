import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductView from '@/views/ProductView.vue'
import CommentView from '@/views/CommentView.vue';
import PostView from '@/views/PostView.vue';
import UserView from '@/views/UserView.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product',
    component: ProductView
  },
  {
    path: '/commentlist',
    name: 'comment',
    component: CommentView
  },
  {
    path: '/postlist',
    name: 'post',
    component: PostView
  },
  {
    path: '/userlist',
    name: 'user',
    component: UserView
  },
  {
    path: '*',
    redirect : "/"
  },

]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router
