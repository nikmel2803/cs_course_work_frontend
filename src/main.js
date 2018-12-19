import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import scheme from './scheme';

Vue.prototype.$eventHub = new Vue();
Vue.prototype.$scheme = scheme;

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
