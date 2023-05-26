const { User } = require('../models/userModel');


//Ver todos los Usuarios
const getUsers = async (req,res)=>{
    try{
        const users = await User.findAll();
        res.json(users);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};


//Ver un usuario por su ID
const getUserById = async(req,res)=>{
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        if(!user){
            res.status(404).json({message: 'Usuario no encontrado'});
        }else{
            res.json(user);
        }
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

//Crear un usuario
const createUser = async (req,res)=>{
    const {username,email,password} = req.body;
    try{
        const user = await User.create({username,email,password});
        user.username=username;
        user.email=email;
        user.password=password;
        res.status(201).json(user);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

//Actualizar Usuario
const updateUser = async(req,res)=>{
    const {id} = req.params;
    const {firstName,lastName,age,gender,profileImage} = req.body;
    try{
        const user = await User.findByPk(id);
        if(!user){
            res.status(404).json({message:'Usuario no encontrado'});
        }else{
            user.firstName = firstName;
            user.lastName = lastName;
            user.age = age;
            user.gender = gender;
            user.profileImage = profileImage;
            await user.save();
            res.json(user);
        }
    }catch(error){
        res.status(500).json({message:error.message});
    }
};

//Borrar Usuario
const deleteUser = async (req,res)=>{
    const {id} = req.params;
    try{
        const user = await User.findByPk(id);
        if(!user){
            res.status(404).json({message:'Usuario no encontrado'});
        }else{
            await user.destroy();
            res.json({message:'Usuario eliminado correctamente'});
        }
    }catch(error){
        res.status(500).json({message:error.message});
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