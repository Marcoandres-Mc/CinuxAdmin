import Dulceria from '../models/dulceria.model.js';

export const getDulces = async (req, res) => {
    const foundDulces = await Dulceria.find();
    if(!foundDulces){
        return res.status(404).json({mensaje: 'Aun no se ha creado nada aqui'})
    }
    res.json(foundDulces);
}

export const getDulce = async (req, res) => {
    try {
        const foundDulce = await Dulceria.findById(req.params.id);
        if (!foundDulce) {
            return res.status(404).json({ mensaje: 'Dulce no encontrado' });
        }
        res.json(foundDulce);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

export const registerDulce = async (req, res) => {
    const { nombre, categoria, marca, precio, stock, url, descripcion } = req.body;
    
    if (!nombre || !categoria || !marca || !precio || !stock || !url || !descripcion) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    try {
        const newDulce = new Dulceria({
            nombre,
            categoria,
            marca,
            precio,
            stock,
            url,
            descripcion,
            stock,
        });

        const DulceSaved = await newDulce.save();
        res.status(201).json(DulceSaved);

    } catch (error) {
        res.status(501).json({ mensaje: error.message });
    }
}

export const deleteDulce = async (req, res) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(400).json({ mensaje: 'ID es requerido' });
    }
  
    try {
        await Dulceria.findByIdAndDelete(id);
        res.json({ mensaje: 'Dulce eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}
