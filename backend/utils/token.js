const jwt = require('jsonwebtoken');
const user = require('../models/user');

const payload = {
    id: user.id,
    username: user.username,
};

const secret = 'mysecret';

const token = jwt.sign(payload, secret, { expiresIn: '3h' });
console.log(token);

const verifyToken = (req, res, next) => {
    console.log("Estamos en verifyToken middleware");
    console.log(req.headers);

    // Verifica si la solicitud se realiza a la ruta de registro de usuario, la ruta de inicio de sesión o la ruta de perfil
    if (['/register', '/login', '/profile'].includes(req.path) && req.method === 'POST') {
        next();
    } else {
        // Obtiene el token de JWT de los encabezados de la solicitud
        const token = req.headers.authorization;
        try {
            // Verifica si el token de JWT es válido y decodifica los datos de usuario
            const decoded = jwt.verify(token, JWT_SECRET);
            // Almacena los datos de usuario en el objeto `req.user`
            req.user = decoded;
            // Pasa el control al siguiente middleware
            next();
        } catch (error) {
            // Si el token es inválido, devuelve un error 401 (No autorizado)
            console.log(error);
            res.status(401).json({ message: 'El Token no es válido' });
        }
    }
};


export { verifyToken };