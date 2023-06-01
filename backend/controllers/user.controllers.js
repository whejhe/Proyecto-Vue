const { User } = require('../models/userModel');


// Ver todos los Usuarios
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Ver un usuario por su ID
const getUserById = async (req, res) => {
    const { id } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' });
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Crear un usuario
const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create({ username, email, password });
        user.username = username;
        user.email = email;
        user.password = password;
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const updateUser = async (req, res) => {
    const { id,firstName,lastName,age,gender,profileImage } = req.body;

    // console.log(req.user);
    try {
        const user = await User.findOne({ where: { id: id } });
        if (!user) {
            res.status(404).send("No se encontró el usuario");
        }
        const result = await User.update(
            {
                firstName: firstName,
                lastName: lastName,
                age: age,
                gender: gender,
                profileImage: profileImage
            },
            { where: { id: id } }
        );

        // if (result[0] === 1) {
        //     res.send("Usuario actualizado");
        // } else {
        //     res.send("No se pudo actualizar el usuario");
        //     throw new Error();
        // }
    } catch (err) {
        console.log("No se pudo actualizar el usuario: ", err);
    }
};



//Borrar Usuario
const deleteUser = async (req, res) => {
    const { id } = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' });
        } else {
            await user.destroy();
            res.json({ message: 'Usuario eliminado correctamente' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Exportar funciones
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};