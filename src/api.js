import axios from 'axios';

const baseURL = '167.172.171.241/api'; // Replace with your actual server endpoint

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;