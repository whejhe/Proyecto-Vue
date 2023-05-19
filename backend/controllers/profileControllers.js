const { Profile } = require('../models/profileModel');

// Ver todos los perfiles
const getProfiles = async (req, res) => {
    try {
        const profiles = await Profile.findAll();
        res.json(profiles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ver un perfil por su ID
const getProfileById = async (req, res) => {
    const { id } = req.params;
    try {
        const profile = await Profile.findByPk(id);
        if (!profile) {
            res.status(404).json({ message: 'Perfil no encontrado' });
        } else {
            res.json(profile);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un perfil
const createProfile = async (req, res) => {
    const { firstName, lastName, age, profileImage, gender } = req.body;
    try {
        const profile = await Profile.create({ firstName, lastName, age, profileImage, gender });
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un perfil
const updateProfile = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age, profileImage, gender } = req.body;
    try {
        const profile = await Profile.findByPk(id);
        if (!profile) {
            res.status(404).json({ message: 'Perfil no encontrado' });
        } else {
            profile.firstName = firstName;
            profile.lastName = lastName;
            profile.age = age;
            profile.profileImage = profileImage;
            profile.gender = gender;
            await profile.save();
            res.json(profile);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Borrar un perfil
const deleteProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const profile = await Profile.findByPk(id);
        if (!profile) {
            res.status(404).json({ message: 'Perfil no encontrado' });
        } else {
            await profile.destroy();
            res.json({ message: 'Perfil eliminado correctamente' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Exportar funciones
module.exports = {
    getProfiles,
    getProfileById,
    createProfile,
    updateProfile,
    deleteProfile
};
