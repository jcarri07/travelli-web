import axios from 'axios';

const baseURL = import.meta.env.BASE_API_URL || "https://staging-api.travelliapp.com";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 15000,
});

export default api;