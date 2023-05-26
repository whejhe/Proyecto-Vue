// import dotenv from 'dotenv';
// dotenv.config();

const TOKEN_KEY = 'token';

// Función para obtener el token del almacenamiento local
export function getToken() {
    const token = localStorage.getItem(TOKEN_KEY) || process.env.TOKEN_KEY;
    if(!token) {
        return null;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expirationDate = new Date(payload.exp * 1000);
    if(expirationDate <= new Date()) {
        destroyToken();
        return null;
    }
    return token;
}

// Función para guardar el token en el almacenamiento local
export function saveToken(token) {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expirationDate = new Date(payload.exp * 1000);
    if(expirationDate <= new Date()) {
        return false;
    }
    localStorage.setItem(TOKEN_KEY, token);
    return true;
}

// Función para eliminar el token del almacenamiento local
export function destroyToken() {
    localStorage.removeItem(TOKEN_KEY);
}


export default {
    getToken,
    saveToken,
    destroyToken,
}