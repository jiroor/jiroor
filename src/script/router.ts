import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// page
import Top from './page/top.vue';
import Signin from './page/signin.vue';
import Signup from './page/signup.vue';

export default new VueRouter({
  routes: [{
    name: 'top',
    path: '/',
    component: Top,
  }, {
    name: 'signin',
    path: '/signin',
    component: Signin,
  }, {
    name: 'signup',
    path: '/signup',
    component: Signup,
  }],
});
