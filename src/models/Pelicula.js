// models/Pelicula.js
const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
  imagen: String,
  nombre: String,
  descripcion: String,
  a: Number,
  d: String,
  elenco: String,
  duracion: String,
});

module.exports = mongoose.model('Pelicula', peliculaSchema);