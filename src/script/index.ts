import Vue, { ComponentOptions } from 'vue';
import VueRouter from 'vue-router';

// firebase
import * as firebase from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyCo29810ZYi_lPvsVC5bwb2Q6zno-wajoY',
  authDomain: 'jiroor-a0000.firebaseapp.com',
  databaseURL: 'https://jiroor-a0000.firebaseio.com',
  projectId: 'jiroor-a0000',
  storageBucket: '',
  messagingSenderId: '575059976341',
  appId: '1:575059976341:web:7845135fa1a90d97'
};
firebase.initializeApp(firebaseConfig);

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
