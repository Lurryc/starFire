import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Index,children:[
      {path: '/', component: Main}
    ]},
  ]
})
