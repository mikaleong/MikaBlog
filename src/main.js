// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import homepage from"./components/front/homepage.vue"
import essays from"./components/front/essays.vue"
import about from"./components/front/about.vue"
import essay from"./components/front/essay.vue"
import login from"./components/front/login.vue"
import edit from"./components/back/editEssay.vue"
import manage from"./components/back/manageEssay.vue";
import result from"./components/front/searchResult.vue"
import back from"./components/back/backgroundSystem.vue"


Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.debug= true;
Vue.config.productionTip = false;

//定义路由
const routes = [
  { path: '/about' ,
    component: about },
  { path: '/essays' ,
  component: essays },
  { path: '/homepage' ,
    component: homepage },
  {path:'/essay/:id',
    component:essay
  },
  {path:'/login',
    component:login
  },
    {path:'/search/:text',
    component:result},
    {path:'/admin/manageEssay',
        component:manage
    },
    {path:'/admin/editEssay',
        component:edit
    },
    {path:'/admin/editEssay/:id',
        component:edit
    },
    {path:'/admin/back',
        component:back
    },

];

//创建router实例并且把定义好的路由传入
const router = new VueRouter({
  routes
});

//创建和挂载根实例
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
