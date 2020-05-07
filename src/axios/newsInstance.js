import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.hnpwa.com/v0/newest'
});

export default instance;