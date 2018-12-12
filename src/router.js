import Vue from 'vue';
import Router from 'vue-router';
import MainView from './views/MainView';
import SignInView from './views/SignInView';
import SignUpView from './views/SignUpView';
import store from './store';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/sign-in');
};
const routes = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainView,
      beforeEnter: ifAuthenticated

    },
    {
      path: '/sign-in',
      name: 'SingIn',
      component: SignInView,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/sign-up',
      name: 'SingUp',
      component: SignUpView,
      beforeEnter: ifNotAuthenticated
    }
  ]
};

export default new Router(routes);
