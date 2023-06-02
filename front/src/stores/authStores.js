import { defineStore } from "pinia";
import axiosInstance from "../Middlewares/axiosInstance";
import { router } from "../router/index";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null,
    id: null,
    username: null,
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    age: null,
    gender: null,
    estaLogueado: false,
};

const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({ ...initialState }),
    getters: {
        getUsername: state => state.username,
        getEmail: state => state.email,
    },
    actions: {
        async login(email, password) {
            try {
                const user = await axiosInstance.post('/login', { email, password });
                this.user = user;
                localStorage.setItem('user', JSON.stringify(user));
                router.push('/');
                const res = await axiosInstance.post("login", { email, password });
                if (localStorage.getItem("token")) {
                    localStorage.removeItem("token");
                }
                if (res.status === 200 && res.data.token) {
                    localStorage.setItem("token", res.data.token);
                    // atob(localStorage.getItem("token"));
                }
                alert("Usuario logeado correctamente");
                this.estaLogueado = true;
                router.push("/");
            } catch (err) {
                console.log("Error ", err);
                const res = err.response
                if (res.data.errorCode === 106) {
                    console.log('Usuario o contraseña incorrectos');
                }
            }
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        },
        async register(email, username, password) {
            try {
                const user = await axiosInstance.post(`${baseUrl}/register`, { email, username, password });
                this.user = user;
                localStorage.setItem('user', JSON.stringify(user));
                router.push('/login');
            } catch (err) {
                console.log("Error ", err);
            }
        },
        async profile(firstName, lastName, age, gender, profileImage) {
            try {
                const { id } = this.user
                const user = await axiosInstance.put(`${baseUrl}/profile`, { id, firstName, lastName, age, gender, profileImage });
                this.user = user;
                localStorage.setItem('user', JSON.stringify(user));
                router.push('/');
            } catch (err) {
                console.log("Error ", err);
            }
        },
    },
});

export default useAuthStore;

