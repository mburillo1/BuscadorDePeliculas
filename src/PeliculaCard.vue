<template>
    <div class="pelicula-card" @click="mostrarDetalles">
      <img :src="imagen" alt="Imagen de la película" class="imagen-pelicula">
      <h2>{{ titulo }}</h2>
      <p>{{ descripcion }}</p>
      <p>Año de lanzamiento: {{ a }}</p>
      <!-- Otros detalles de la película -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      titulo: String,
      descripcion: String,
      imagen: String,
      a: Number
      // Definir otras propiedades según sea necesario
    },
    methods: {
    mostrarDetalles() {
      // Emitir un evento de clic cuando se haga clic en la tarjeta
      this.$emit("clic-en-tarjeta", this);
    }
   }
  };
  </script>
  
  <style scoped>
  .pelicula-card {
    /* Estilos para la tarjeta de película */
    background-color: #f0f0f0;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  /* Estilo para la imagen de la película */
  .imagen-pelicula {
  width: 150px; /* Establece el ancho deseado de la imagen */
  height: auto; /* Mantén la proporción original de la imagen */
}
  </style>