import axios from 'axios';
import store from './store';

let {login, password} = store.state.auth.user;

store.subscribe((mutation, state) => {
  login = state.auth.user.login;
  password = state.auth.user.password;
});

const API_ENDPOINT = 'http://127.0.0.1:8000';

async function signIn(authLogin, authPassword) {
  const config = {params: {login: authLogin, password: authPassword}};

  const response = await axios.get(`${API_ENDPOINT}/sign-in`, config);

  return response.data;
}

async function getData() {
  const config = {params: {login, password}};
  const response = await axios.get(`${API_ENDPOINT}/get-data`, config);

  return response.data;
}

async function saveData(orgData) {
  const config = {
    login, password, orgData
  };

  await axios.post(`${API_ENDPOINT}/save-org`, config);
}

async function registerOrg(data) {
  const config = {...data};

  await axios.post(`${API_ENDPOINT}/register-org`, config);
}

export default {
  signIn,
  getData,
  registerOrg,
  saveData
};
