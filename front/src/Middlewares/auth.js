import api, { saveToken } from '../utils/token'
import { getToken } from '../utils/token'

async function verificarToken(token) {
    if (token === null) {
        return false;
    }
    try {
        const response = await api.post('auth', null, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response.status === 200
    } catch (error) {
        return false
    }
}

function checkToken() {
    const token = getToken()
    return token !== null
}


export default function (to, from, next) {
    const token = getToken();
    if (token) {
        verificarToken(token)
            .then((isValid) => {
                if (isValid) {
                    next();
                } else {
                    console.log('Token inválido');
                    next({ name: 'login' });
                }
            })
            .catch((error) => {
                console.log('Error al verificar el token:', error);
                next({ name: 'login' });
            });
    } else {
        next();
    }
}