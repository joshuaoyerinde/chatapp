import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Chatpanel from '../views/chatpanel/Chat.vue'
import Signin from '../views/login/Signin.vue'
import Signup from '../views/signup/Signup.vue'
import Chatuser from '../views/chatpanel/Chatuser.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {path:'/chatbox',  component:Chatpanel, 
    // children:[
      

    // ]
},
{path:"/chatyou", name:"chatuser", component:Chatuser},
  {path:'/signin', name:'signin ', component:Signin },
  {path:'/signup', name:'signup', component:Signup}
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
