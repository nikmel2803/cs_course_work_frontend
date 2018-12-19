import {ADD_CAR, LOAD_DATA, SAVE_ORG, SAVE_CAR, REMOVE_CAR} from '../actions/organizationsData';
import Vue from 'vue';

const state = {
  organizations: null
};

function getOrg(orgId) {
  return state.organizations.find(org => org.id === orgId);
}

const actions = {};

const mutations = {
  [LOAD_DATA](state, data) {
    state.organizations = data.organizations;
  },
  [SAVE_ORG](state, {orgId, name, description, founding_date, address}) {
    const org = getOrg(orgId);

    Vue.set(org, 'name', name);
    Vue.set(org, 'description', description);
    Vue.set(org, 'founding_date', founding_date);
    Vue.set(org, 'address', address);
  },
  [SAVE_CAR](state, {orgId, carIndex, name, model, purchase_date, description}) {
    const org = getOrg(orgId);
    const car_park = org.car_park;

    Vue.set(car_park, carIndex, {name, model, purchase_date, description});
  },
  [REMOVE_CAR](state, {orgId, carIndex}) {
    const org = getOrg(orgId);
    const carPark = org.car_park;
    const part1 = carPark.slice(0, carIndex);

    // console.log(part1);
    const part2 = carPark.slice(carIndex + 1);

    // console.log(part2);
    // console.log(part1.concat(part2));
    Vue.set(org, 'car_park', part1.concat(part2));
  },
  [ADD_CAR](state, {orgId}) {
    const org = getOrg(orgId);
    const car_park = org.car_park;
    const carIndex = car_park.length;

    Vue.set(car_park, carIndex, {
      name: 'Наименование',
      model: 'Модель',
      status: 'Статус',
      purchase_date: 'Дата приобретения',
      description: 'Описание'
    });
    // console.log(org.car_park);
  }
};

export default {
  state,
  actions,
  mutations
};
