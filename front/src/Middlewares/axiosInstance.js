import axios from 'axios';


axios.defaults.baseURL = 'https://localhost:3000';


const clientServer = axios.create({
    baseURL: 'https://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})


export default clientServer;