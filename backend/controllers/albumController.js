

// Controlador para obtener todos los álbumes
const getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.findAll();
        res.status(200).json(albums);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los álbumes' });
    }
};

// Controlador para crear un nuevo álbum
const createAlbum = async (req, res) => {
    const { nombre, anio } = req.body;
    try {
        const album = await Album.create({
            nombre,
            anio
        });
        res.status(201).json(album);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear un nuevo álbum' });
    }
};

// Controlador para actualizar un álbum existente
const updateAlbum = async (req, res) => {
    const { id } = req.params;
    const { nombre, anio } = req.body;
    try {
        const album = await Album.findOne({ where: { id } });
        if (!album) {
            res.status(404).json({ message: 'Álbum no encontrado' });
            return;
        }
        album.nombre = nombre;
        album.anio = anio;
        await album.save();
        res.status(200).json(album);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al actualizar el álbum' });
    }
};

// Controlador para eliminar un álbum existente
const deleteAlbum = async (req, res) => {
    const { id } = req.params;
    try {
        const album = await Album.findOne({ where: { id } });
        if (!album) {
            res.status(404).json({ message: 'Álbum no encontrado' });
            return;
        }
        await album.destroy();
        res.status(200).json({ message: 'Álbum eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al eliminar el álbum' });
    }
};

module.exports = {
    getAllAlbums,
    createAlbum,
    updateAlbum,
    deleteAlbum
}