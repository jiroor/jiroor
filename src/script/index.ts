import Vue, { ComponentOptions } from 'vue';
import VueRouter from 'vue-router';

// page/top
const Top: ComponentOptions<Vue> = {
  template: '<div>top</div>',
};

// page/view
const View: ComponentOptions<Vue> = {
  template: '<div>view</div>',
};

// router
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/',
    component: Top,
  }, {
    path: '/view',
    component: View,
  }],
});

// app
const App = new Vue({
  router,
});
App.$mount('#app');
