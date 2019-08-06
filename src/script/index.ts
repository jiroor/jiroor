// vue
import Vue from 'vue';

// firebase
import './firebase';

// router
import router from './router';

// app
const App = new Vue({
  router,
});
App.$mount('#app');
