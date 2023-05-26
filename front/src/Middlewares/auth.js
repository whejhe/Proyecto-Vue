import api from '../utils/token'
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
    const token = getToken()
    if (token) {
        if (checkToken()) {
            verificarToken(token).then((isValid) => {
                if (isValid) {
                    next()
                } else {
                    alert('Token inválido');
                    next({ name: 'login' })
                }
            })
        } else {
            next({ name: 'login' })
        }
    } else {
        next()
    }
}



