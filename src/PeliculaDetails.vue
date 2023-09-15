<template>
    <div class="pelicula-details">
      <h1>{{ titulo }}</h1>
      <img :src="imagen" alt="Imagen de la película">
      <p>Año de lanzamiento: {{ a }}</p>
      <p>{{ d }}</p>
      <p>Elenco: {{ elenco }}</p>
      <p>Duración: {{ duracion }} </p>
      <!-- Otros detalles de la película -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      titulo: String,
      descripcion: String,
      imagen: String,
      elenco: String,
      duracion: Number,
      d: String,
      a: Number
      // Definir otras propiedades según sea necesario
    }
  };
  </script>
  
  <style scoped>
    ul {
    position: relative;
    z-index: 1; /* Asegura que la lista de resultados esté por encima de los detalles */
  }
  .pelicula-details {
    /* Estilos para los detalles de la película */
    position: relative;
    z-index: 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>