const { User } = require('../models/userModel');


//Ver todos los Usuarios
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//Ver un usuario por su ID
const getUserById = async (req, res) => {
    const { id } = req.params;
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
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Actualizar Usuario
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, edad, genero, telefono, profileImage, newPassword } = req.body;
    try {
        const result = await User.update(
            { nombre, apellido, edad, genero, telefono, profileImage, password: newPassword },
            { where: { id: id } }
        );
        if (result[0] === 0) {
            res.status(404).json({ message: 'Usuario no encontrado' });
        } else {
            const user = await User.findByPk(id);
            res.json({ user: user, mensaje: "Usuario actualizado correctamente" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//Borrar Usuario
const deleteUser = async (req, res) => {
    const { id } = req.params;
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


const getImage = async (req, res) => {
    console.log('ID IMG', req.query.id);
    const img = await UserImages.findOne({ where: { userId: req.query.id } })
    if (img === null) {
        return res.send('noimg')
    }
    const ext = img.dataValues.imgExtension
    console.log(ext)
    let imgBase64 = img.dataValues.img.toString('base64')
    res.json({ img: imgBase64, ext: ext })
}


module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.getImage = getImage;
