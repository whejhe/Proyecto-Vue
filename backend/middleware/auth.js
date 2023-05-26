const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
    console.log(req.headers)
    //Verifica si la solicitud se realiza a la ruta de registro de usuario
    if ((req.path === '/Register') && req.method === 'POST') {
        next();
    }else if(req.path==='/profile' && req.method==='POST'){
        next();
    } else {
        // Obtiene el token de JWT de los encabezados de la solicitud
        const token = req.headers.authorization
        try {
            // Verifica si el token de JWT es válido y decodifica los datos de usuario
            const decoded = jwt.verify(token, JWT_SECRET);
            // Almacena los datos de usuario en el objeto `req.user`
            req.user = decoded;
            // Pasa el control al siguiente middleware
            next();
        } catch (error) {
            // Si el token es inválido, devuelve un error 401 (No autorizado)
            res.status(401).json({ message: 'Token inválido' });
            console.log(error);
        }
    }

};


module.exports = { verifyToken };