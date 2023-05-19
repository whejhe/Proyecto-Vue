const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
    console.log(req.headers)
    if (req.path === '/register' || (req.path === '/profile' && req.method === 'POST')) {
        next();
    } else if (req.path.startsWith('/profile/') && req.method === 'GET') {
        const token = req.headers.authorization;
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ message: 'Token inválido' });
            console.log(error);
        }
    } else {
        const token = req.headers.authorization;
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ message: 'Token inválido' });
            console.log(error);
        }
    }
};


module.exports.verifyToken = verifyToken;

