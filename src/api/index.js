import axios from 'axios';

async function signIn(login, password) {
  const config = {params: {login, password}};

  const response = await axios.get('http://127.0.0.1:8000/signIn', config);
  return response.data;
}

export default {
  signIn
};
