import {SAVE_DATA, LOAD_DATA, SAVE_ORG, SAVE_CAR} from '../actions/organizationsData';

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

    org.name = name;
    org.description = description;
    org.founding_date = founding_date;
    org.address = address;
  },
  [SAVE_CAR](state, {id, index, name, model, purchase_date, description}) {
    const org = getOrg(id);

    org.car_park[index] = {};
    org.car_park[index].name = name;
    org.car_park[index].model = model;
    org.car_park[index].purchase_date = purchase_date;
    org.car_park[index].description = description;
  }
};

export default {
  state,
  actions,
  mutations
};
