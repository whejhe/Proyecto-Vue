const { Users } = require('../models/user');
const {Image} = require('../models/imagenUser')
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
        // const image =({
        //     idImage: req.body.idImage,
        //     imageProfile: req.body.imageProfile
        // })
        const userDB = await Users.create(user);
        // const imageDB = await Image.create(image);

        return res.status(200).json({
            message: 'El usuario se ha creado correctamente',
            userDB,
            // imageDB
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
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).json({ msg: "Todos los campos son requeridos" });
        }
        const user = await Users.findOne({ where: { email: email } });
        if (user && (await bcrypt.compare(password, user.password))) {
            //Creo un token
            delete user.dataValues.password;
            const token = jwt.sign(user.dataValues, process.env.JWT_SECRET, {
                expiresIn: "4H",
            });
            user.token = token;
            return res.status(200).json({ token: token });
        }
        res.status(400).send("Usuario o contraseña inválidas");
    } catch (error) {
        console.log(error);
    }
};

const logout = (req, res) => {
    // Invalidar el token actual y enviar una respuesta al cliente
    res.json({ message: 'Sesión cerrada correctamente' });
};




module.exports = { register, login, logout, };