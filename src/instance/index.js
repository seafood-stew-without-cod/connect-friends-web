import axios from 'axios';

const baseURL = 'http://52.79.236.139';

export const request = axios.create({
  baseURL,
});
