import axios from 'axios';

const API_ENDPOINT = 'http://127.0.0.1:8000';

async function signIn(login, password) {
  const config = {params: {login, password}};

  const response = await axios.get(`${API_ENDPOINT}/sign-in`, config);

  return response.data;
}

async function getData(login, password) {
  const config = {params: {login, password}};

  const response = await axios.get(`${API_ENDPOINT}/get`, config);

  return response.data;
}

async function saveOrg(login, password, orgData) {
  const config = {
    login, password, orgData
  };

  await axios.post(`${API_ENDPOINT}/save-org`, config);
}

async function saveData() {
  console.log('LOOOOOADED!!');
}

export default {
  signIn,
  getData,
  saveData,
  saveOrg
};
