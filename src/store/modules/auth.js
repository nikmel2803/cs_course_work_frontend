import {AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT} from '../actions/auth';
import {USER_REQUEST} from '../actions/user';
import apiCall from '../../api';

const state = {token: localStorage.getItem('user-token') || '', status: '', hasLoadedOnce: false};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
};

const actions = {
  async [AUTH_REQUEST]({commit, dispatch}, user) {
    commit(AUTH_REQUEST);
    try {
      const response = await apiCall.signIn(user.login, user.password);

      localStorage.setItem('user-token', response.token);
      commit(AUTH_SUCCESS, response);
      return response;
    } catch (err) {
      commit(AUTH_ERROR, err);
      localStorage.removeItem('user-token');
      throw err;
    }
  },
  async [AUTH_LOGOUT]({commit, dispatch}) {
    commit(AUTH_LOGOUT);
    localStorage.removeItem('user-token');
  }
};

const mutations = {
  [AUTH_REQUEST](state) {
    state.status = 'loading';
  },
  [AUTH_SUCCESS](state, resp) {
    state.status = 'success';
    state.token = resp.token;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR](state) {
    state.status = 'error';
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT](state) {
    state.token = '';
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
