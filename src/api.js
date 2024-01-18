import axios from 'axios';

const baseURL = 'https://localhost:3003/api'; // Replace with your actual server endpoint
// const baseURL = '167.172.171.241/api'; // Replace with your actual server endpoint

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default axiosInstance;