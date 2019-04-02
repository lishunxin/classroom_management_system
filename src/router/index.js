import Vue from 'vue'
import Router from 'vue-router'
import getApprovalDetail from '@/components/getApprovalDetail'
import getRoom from '@/components/getRoom'
import getRoomDetailByIdAndDate from '@/components/getRoomDetailByIdAndDate'
import getStudentRSVById from '@/components/getStudentRSVById'
import home from '@/components/home'
import insertInfor from '@/components/insertInfor'
import login from '@/components/login'
import register from '@/components/register'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'getApprovalDetail',
      component: getApprovalDetail
    },
    {
      path: '/getRoom',
      name: 'getRoom',
      component: getRoom
    },
    {
      path: '/getRoomDetailByIdAndDate',
      name: 'getRoomDetailByIdAndDate',
      component:getRoomDetailByIdAndDate
    },
    {
      path: '/getStudentRSVById',
      name: 'getStudentRSVByIdd',
      component: getStudentRSVById
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/insertInfor',
      name: 'insertInfor',
      component: insertInfor
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }

  ]
})
