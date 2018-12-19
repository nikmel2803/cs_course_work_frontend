import {SAVE_DATA, LOAD_DATA, SAVE_ORG, SAVE_CAR, REMOVE_CAR} from '../actions/organizationsData';
import Vue from 'vue';

const state = {
  organizations: null
};

function getOrg(id) {
  return state.organizations.find(org => org.id === id);
}

const actions = {};

const mutations = {
  [LOAD_DATA](state, data) {
    state.organizations = data.organizations;
  },
  [SAVE_ORG](state, {id, name, description, founding_date, address}) {
    const org = getOrg(id);
    console.log(id);
    console.log(org);
    Vue.set(org, 'name', name);
    Vue.set(org, 'description', description);
    Vue.set(org, 'founding_date', founding_date);
    Vue.set(org, 'address', address);
  },
  [SAVE_CAR](state, {id, index, name, model, purchase_date, description}) {
    const org = getOrg(id);
    Vue.set(org.car_park, index, {name, model, purchase_date, description});
  },
  [REMOVE_CAR](state, {id, carIndex}) {
    const org = getOrg(id);
    org.car_park.splice(carIndex, 1);
  }
};

export default {
  state,
  actions,
  mutations
};
