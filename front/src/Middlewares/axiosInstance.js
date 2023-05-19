import axios from 'axios';

const clientServer = axios.create({
    baseURL: 'https://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

clientServer.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;

}, (error) => {
    return Promise.reject(error);
});


export default clientServer;