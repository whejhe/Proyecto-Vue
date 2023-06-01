const {User}  = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET;
const dotenv = require('dotenv');
dotenv.config();


const register = async (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, 10);
    try {
        const user = ({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });
        const userDB = await User.create(user);

        return res.status(200).json({
            message: 'El usuario se ha creado correctamente',
            userDB
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Error al crear el usuario',
            err,
        })
    }
};



const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar al usuario en la base de datos
        const user = (await User.findOne({ where: { email } }));
        // Si no se encuentra el usuario, enviar un error
        if (!user) {
            return res.status(404).json({ message: 'Email o contraseña incorrectosA' });
        }
        // Comparar las contraseñas cifradas
        const passwordMatch = await bcrypt.compare(password, user.password);
        // Si las contraseñas no coinciden, enviar un error
        if (!passwordMatch) {
            return res.status(404).json({ message: 'Email o contraseña incorrectos' });
        }
        // Generar un token JWT y enviarlo al cliente
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });
        res.header({ Authorization: token })
        res.json({ token: token });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
};

const logout = (req, res) => {
    // Invalidar el token actual y enviar una respuesta al cliente
    res.json({ message: 'Sesión cerrada correctamente' });
};




module.exports = { register, login, logout, };