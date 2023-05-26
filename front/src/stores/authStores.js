import { defineStore } from "pinia";
import axios from "axios";
import { router } from "../router";


const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null,
        email: null,
        username: null,
        id: null,
        estaLogueado: false,
    }),
    getters: {
        getUsername(state) {
            return state.username
        },
        getEmail(state) {
            return state.email;
        },
    },
    actions: {
        async login(email, password) {
            const user = await axios.post('/login', { email, password });
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
            router.push(this.returnUrl || '/');
            return user
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        },
        async register(email, username, password) {
            const user = await axios.post(`${baseUrl}/register`, { email, username, password });
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
            router.push('/login');
        },
        async profile(profileData) {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await axios.post(`${baseUrl}/profile`, { userId: user.id, firstName,lastName,age,gender,profileImage });
            return response;
        },
        async addGrupo(name, yearFormed, genero, description) {
            const grupo = await axios.post(`${baseUrl}/addGrupo`, { name, yearFormed, genero, description });
            this.grupo = grupo;
            localStorage.setItem('grupo', JSON.stringify(grupo));
            router.push('/addGrupo');
        }
    },

});



export default useAuthStore;