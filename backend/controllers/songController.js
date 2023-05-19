const { Song } = require('../models/songModel');

// Controlador para obtener todas las canciones
const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.findAll();
        res.status(200).json(songs);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener las canciones' });
    }
};

// Controlador para crear una nueva canción
const createSong = async (req, res) => {
    const { nombre, duracion } = req.body;
    try {
        const song = await Song.create({
            nombre,
            duracion
        });
        res.status(201).json(song);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear una nueva canción' });
    }
};

// Controlador para actualizar una canción existente
const updateSong = async (req, res) => {
    const { id } = req.params;
    const { nombre, duracion } = req.body;
    try {
        const song = await Song.findOne({ where: { id } });
        if (!song) {
            res.status(404).json({ message: 'Canción no encontrada' });
            return;
        }
        song.nombre = nombre;
        song.duracion = duracion;
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al actualizar la canción' });
    }
};

// Controlador para eliminar una canción existente
const deleteSong = async (req, res) => {
    const { id } = req.params;
    try {
        const song = await Song.findOne({ where: { id } });
        if (!song) {
            res.status(404).json({ message: 'Canción no encontrada' });
            return;
        }
        await song.destroy();
        res.status(200).json({ message: 'Canción eliminada correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al eliminar la canción' });
    }
};


module.exports = {
    getAllSongs,
    createSong,
    updateSong,
    deleteSong
}