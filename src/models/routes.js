// routes.js
const express = require('express');
const router = express.Router();
const peliculasController = require('../controllers/peliculasController');

// Ruta para obtener todas las películas
router.get('/api/peliculas', peliculasController.obtenerTodasLasPeliculas);

module.exports = router;