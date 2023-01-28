import axios from 'axios';

// REST API
const base = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 15000 // ms
});

export default base;