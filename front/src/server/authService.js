import axios from 'axios';
import { getToken, saveToken, destroyToken } from '../utils/auth';

const BASE_URL = 'https://localhost:4000'

export const authService = {
    async register(username, email, password) {
        getToken();
        const response = await axios.post('../views/Register.vue', {
            username,
            email,
            password
        });
        const { user } = response.data;
        console.log(user);
        return { user };
    },

    async login(username, password) {
        const response = await axios.post('../views/Login.vue', {
            username,
            password
        });
        saveToken();
        const { user, token } = response.data;
        return { user, token };
    },
    async logout(token) {
        await axios.post('../views/Inicio.vue', {}, { headers: { Authorization: 'Bearer' + token } });
        destroyToken();
    },

    async addProfile(data) {
        const token = getToken();
        const response = await axios.post('../views/profileViews.vue', data, {
            headers: {
                Authorization: 'Bearer' + token
            }
        });
        return response.data;
    }

}

export const useLogin = () => {
    const store = useLoginStores();

    const crearUsuario = async (data) => {
        return await store.create(data).then(result => {
            return result;
        });
    };
    const actualizaUsuario = async (data) => {
        return await store.edit(data).then(result => {
            return result;
        });
    };
    const borrarUsuario = async (data) => {
        return await store.delete(data).then(result => {
            return result;

        })

    };
    const obtenerUsuario = async (numUsuario) => {
        return await store.get(numUsuario).then(result => {
            return result;
        })

    };
    const obtenerTodosUsuario = async (todosUsuarios) => {
        return await store.getAll(todosUsuarios).then(result => {
            return result;
        })

    }

    return {
        crearUsuario,
        actualizaUsuario,
        borrarUsuario,
        obtenerUsuario,
        obtenerTodosUsuario,
    }
};
