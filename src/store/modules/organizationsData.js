import {SAVE_DATA, LOAD_DATA} from '../actions/organizationsData';
import apiCall from '../../api';

const state = {
  organizations: null
};

const actions = {
  async [SAVE_DATA]({commit, dispatch, rootState, organizations}) {
    const user = rootState.auth.user;
    console.log(organizations)
    apiCall.saveData(user.login, user.password);
  },
  async [LOAD_DATA]({commit, dispatch, rootState}) {
    const user = rootState.auth.user;

    apiCall.getData(user.login, user.password).then(response => {
      commit(LOAD_DATA, response.organizations);
    });
  }
};

const mutations = {
  [LOAD_DATA](state, organizations) {
    state.organizations = organizations;
  }
};

export default {
  state,
  actions,
  mutations
};
