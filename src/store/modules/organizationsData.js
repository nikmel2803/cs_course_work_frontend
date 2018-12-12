import {SAVE_DATA, LOAD_DATA, SAVE_ORG} from '../actions/organizationsData';
import apiCall from '../../api';

const state = {
  organizations: null
};

const actions = {
  async [SAVE_DATA]({commit, dispatch, rootState, organizations}) {
    const user = rootState.auth.user;
    console.log(organizations);
    apiCall.saveData(user.login, user.password);
  },
  async [LOAD_DATA]({commit, dispatch, rootState}) {
    const user = rootState.auth.user;

    apiCall.getData(user.login, user.password).then(response => {
      commit(LOAD_DATA, response.organizations);
    });
  },
  async [SAVE_ORG]({commit, dispatch, rootState}, orgData) {
    const user = rootState.auth.user;

    apiCall.saveOrg(user.login, user.password, orgData).then(() => {
      commit(SAVE_ORG, orgData);
    });
  }
};

const mutations = {
  [LOAD_DATA](state, organizations) {
    state.organizations = organizations;
  },
  [SAVE_ORG](state, {id, name, description, founding_date, address}) {
    state.organizations[id].name = name;
    state.organizations[id].description = description;
    state.organizations[id].founding_date = founding_date;
    state.organizations[id].address = address;
  }
};

export default {
  state,
  actions,
  mutations
};
