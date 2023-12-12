import axios from 'axios'

const baseURL = process.env.BACKEND_API_URL;

const api = axios.create({baseURL});

export default api;