import Pelicula from '../models/catalogoPeliculas.model.js';

export const getPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const getPelicula = async (req, res) => {
  try {
    const pelicula = await Pelicula.findById(req.params.id);
    if (!pelicula) {
      return res.status(404).json({ mensaje: 'Pelicula no encontrada' });
    }
    res.json(pelicula);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const registerPelicula = async (req, res) => {
    try {
        const { nombre, categoria, productora, descripcion, url} = req.body;
        if (!nombre || !categoria || !productora || !descripcion || !url ) {
          return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
        }
        const newPelicula = new Pelicula({ nombre, categoria, productora, descripcion, url});
        const savedPelicula = await newPelicula.save();
        res.status(201).json(savedPelicula);
      } catch (error) {
        res.status(400).json({ mensaje: error.message });
      }
};

export const updatePelicula = async (req, res) => {
  try {
    const pelicula = await Pelicula.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!pelicula) {
      return res.status(404).json({ mensaje: 'Pelicula no encontrada' });
    }
    res.json({ mensaje: 'Pelicula actualizada' });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
}

export const deletePelicula = async (req, res) => {
  try {
    const pelicula = await Pelicula.findByIdAndDelete(req.params.id);
    if (!pelicula) {
      return res.status(404).json({ mensaje: 'Pelicula no encontrada' });
    }
    res.json({ mensaje: 'Pelicula eliminada' });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};