// controllers/peliculasController.js
const Pelicula = require('../models/Pelicula');

// Obtener todas las películas
exports.obtenerTodasLasPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las películas', err: error });
  }
};