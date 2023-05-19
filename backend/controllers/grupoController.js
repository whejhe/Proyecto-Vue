
const getGrupoByName = async (req, res) => {
    const { name } = req.params;
    try{
        const grupoEncontrado = await grupo.findOne({ where: { name } });
        if(!grupoEncontrado){
            res.status(404).json({message: 'Grupo no encontrado'});
        }else{
            res.json(grupoEncontrado);
        }
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

const createGrupo = async (req, res) => {
    const { nombre, genero } = req.body;
    try {
        const grupo = await Grupo.create({
            nombre,
            genero
        });
        res.status(201).json(grupo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear un nuevo grupo' });
    }
};

// Controlador para actualizar un grupo existente
const updateGrupo = async (req, res) => {
    const { id } = req.params;
    const { nombre, genero } = req.body;
    try {
        const grupo = await Grupo.findOne({ where: { id } });
        if (!grupo) {
            res.status(404).json({ message: 'Grupo no encontrado' });
            return;
        }
        grupo.nombre = nombre;
        grupo.genero = genero;
        await grupo.save();
        res.status(200).json(grupo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al actualizar el grupo' });
    }
};

// Controlador para eliminar un grupo existente
const deleteGrupo = async (req, res) => {
    const { id } = req.params;
    try {
        const grupo = await Grupo.findOne({ where: { id } });
        if (!grupo) {
            res.status(404).json({ message: 'Grupo no encontrado' });
            return;
        }
        await grupo.destroy();
        res.status(200).json({ message: 'Grupo eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al eliminar el grupo' });
    }
};

module.exports = {
    getGrupoByName,
    createGrupo,
    updateGrupo,
    deleteGrupo
};
