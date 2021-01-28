import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index.vue";


Vue.use(VueRouter);

// 解决报错
// const originalPush = VueRouter.prototype.push
// const originalReplace = VueRouter.prototype.replace
// push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }
// // replace
// VueRouter.prototype.replace = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
//   return originalReplace.call(this, location).catch(err => err)
// }

const routes = [
  {
    path: "/",
    name: "Index",
    component: Home,
    children: [
      {
        path: '/user',
        name: 'User',
        component: () => import("../views/user/index.vue")
      },

      {
        path: '/safe',
        name: 'Safe',
        component: () => import("../views/safe/index.vue")
      },
      {
        path: '/password',
        name: 'Password',
        component: () => import("../views/safe/password.vue")
      },
      {
        path: '/fund-password',
        name: 'Fund-password',
        component: () => import("../views/safe/fund-Password.vue")
      },
      {
        path: '/phone-number',
        name: 'Phone-number',
        component: () => import("../views/safe/phone-number.vue")
      },
      {
        path: '/add-bank-card',
        name: 'Add-bank-card',
        component: () => import("../views/safe/add-bank-card.vue")
      },
      {
        path: '/bank',
        name: 'Bank',
        component: () => import("../views/safe/bank.vue")
      },
      {
        path: '/account',
        name: 'Account',
        component: () => import("../views/account/index.vue")
      },
      {
        path: '/recharge',
        name: 'Recharge',
        component: () => import("../views/account/recharge.vue")
      },
      {
        path: '/grade',
        name: 'Grade',
        component: () => import("../views/account/grade.vue")
      },
      {
        path: '/grade-detail',
        name: 'Grade-detail',
        component: () => import("../views/account/grade-detail.vue")
      },
      {
        path: '/authentication',
        name: 'Authentication',
        component: () => import("../views/authentication/index.vue")
      },
      {
        path: '/personal-login',
        name: 'Personal-login',
        component: () => import("../views/personal/login.vue")
      },
      {
        path: '/personal-register',
        name: 'Personal-register',
        component: () => import("../views/personal/register.vue")
      },
      {
        path: '/personal-forget',
        name: 'Personal-forget',
        component: () => import("../views/personal/forget.vue")
      }

    ]
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
