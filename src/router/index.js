import Vue from 'vue'
import Router from 'vue-router'
import check_goods from '../components/check_goods/check_goods'
import my_message from '../components/my_message/my_message.vue'
import add_dba from '../components/add_dba/add_dba'
import logIn from "../components/logIn/log_in"
import main from "../components/main/main.vue"
Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/logIn',
      component: logIn
     },
     { 
      path: '/main',
      component: main,
      children: [
        {
          path: "check_goods",
          component: check_goods
        },
        {
          path: "my_message",
          component: my_message
        },
        {
          path: "add_dba",
          component: add_dba
        }
      ]
     },
    { 
      path: '/',
      redirect: '/logIn'
     }
  ]
})
