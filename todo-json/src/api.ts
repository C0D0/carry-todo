import axios from 'axios';

const baseURL = 'http://localhost:3000'; // Use the mock server URL in development

const api = axios.create({
  baseURL,
  timeout: 5000,
});

export default api;
