import axios from 'axios';

export const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_HOSTNAME}:${process.env.REACT_APP_BACKEND_PORT}`,
});

export const requestAPI = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestAll = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const updateStatus = async (endpoint, body) => {
  const { data } = await api.patch(endpoint, body);
  return data;
};