import { defineStore } from "pinia";
import axiosInstance from "../Middlewares/axiosInstance";
import { router } from "../router/index";


const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null,
        email: null,
        username: null,
        id: null,
        firstName: null,
        lastName: null,
        age: null,
        gender: null,
        profileImage: null,
        password: null,
        grupo: null,
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
            // const user = await axiosInstance.post('/login', { email, password });
            // this.user = user;
            // localStorage.setItem('user', JSON.stringify(user));
            // router.push('/');
            // return user

            if (!email || !password) {

                return;
            }

            axiosInstance
                .post("login", {
                    email: email,
                    password: password,
                })
                .then((res) => {
                    // if (localStorage.getItem("token")) {
                    //   localStorage.removeItem("token");
                    // }
                    if (res.status === 200) {
                        if (res.data.token) {
                            localStorage.setItem("token", res.data.token);
                            atob(localStorage.getItem("token"));
                        }
                        alert("Usuario logeado correctamente"),
                            this.estaLogueado = true;
                        router.push("/");
                    }
                })
                .catch((err) => {
                    console.log("Error ", err);
                    const res = err.response
                    if (res.data.errorCode === 106)
                        console.log('Usuario o contraseña incorrectos');

                });




        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        },
        async register(email, username, password) {
            const user = await axiosInstance.post(`${baseUrl}/register`, { email, username, password });
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
            router.push('/login');
        },
        async profile(firstName, lastName, age, gender, profileImage) {
            const { id } = this.user
            const user = await axiosInstance.put(`${baseUrl}/profile`, { id, firstName, lastName, age, gender, profileImage });
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
            router.push('/');
        },
        async addGrupo(name, yearFormed, genero, description) {
            const grupo = await axiosInstance.post(`${baseUrl}/addGrupo`, { name, yearFormed, genero, description });
            this.grupo = grupo;
            localStorage.setItem('grupo', JSON.stringify(grupo));
            router.push('/addGrupo');
        }
    },

});



export default useAuthStore;