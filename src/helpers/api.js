import axios from 'axios';
import {api} from '../config/settings';

axios.interceptors.request.use(async function (config) {
  config.baseURL = api.baseUrl;
  return config;
});

const getBySearchTerm = async (endpoint, search) => {
  const {data: res} = await axios.get(endpoint, {params: {search}});
  return res;
};

export default {
  getBySearchTerm,
};
