import axios from 'axios';


axios.defaults.baseURL = 'https://localhost:3000';


const axiosInstance = axios.create({
    baseURL: 'https://localhost:3000',
    withCredentials: false,
    headers: {
        //'Authorization': localStorage.getItem('token') ? localStorage.getItem('token') : null,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


export default axiosInstance;