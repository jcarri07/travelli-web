import axios from 'axios';

const baseURL = "https://travelli.artificialic.net/api";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 15000,
});

export default api;