<template>
  <div>
    <h1>Buscador de Resultados</h1>
    <input type="text" v-model="busqueda" @input="buscar" placeholder="Escribe tu búsqueda">
    
    <ul v-if="!viendoDetalles || busqueda!==''">
      <li v-for="resultado in resultadosFiltrados" :key="resultado.id">{{ resultado.nombre }}
      <!-- Usar el componente de tarjeta de película para mostrar la tarjeta -->
      <PeliculaCard 
      :titulo="resultado.nombre" 
      :descripcion="resultado.descripcion" 
      :imagen="resultado.imagen" 
      :añoLanzamiento="resultado.añoLanzamiento" 
      :d="resultado.d"
      :a="resultado.a"
      @click="mostrarDetalles(resultado)"
      />
      </li>
    </ul>

    <PeliculaDetails v-if="viendoDetalles" 
      :titulo="peliculaSeleccionada.nombre" 
      :descripcion="peliculaSeleccionada.descripcion" 
      :imagen="peliculaSeleccionada.imagen" 
      :elenco="peliculaSeleccionada.elenco" 
      :duracion="peliculaSeleccionada.duracion" 
      :d="peliculaSeleccionada.d" 
      :a="peliculaSeleccionada.a"
      @click="ocultarDetalles"
    />
  </div>
</template>

<script>
import axios from 'axios';
import PeliculaCard from './PeliculaCard.vue';
import PeliculaDetails from './PeliculaDetails.vue';

export default {
  components:{
  PeliculaCard,
  PeliculaDetails
  },
  data() {
    return {
      busqueda: '',
      resultados: [
        /*{
          id: 1,
          imagen: 'Rapidos.png',
          nombre: 'Rápidos y Furiosos',
          descripcion: 'Carros, destruccion y mucha aventura.',
          a: '2004',
          d: 'En la primera película de Rápidos y Furiosos, conocemos a Dominic Toretto (Vin Diesel), un talentoso corredor callejero y líder de un grupo de conductores clandestinos. Toretto vive su vida al límite, compitiendo en peligrosas carreras nocturnas y robando equipos electrónicos de camiones en movimiento.',
          elenco: 'Toreto,Paul Walker and Michelle Rodriguez',
          duracion: '2:40'
        },
        {
          id: 2,
          imagen: 'Bolt.png',
          nombre: 'Bolt',
          descripcion: 'Un perro se extravia y vive muchas aventuras.',
          a: '2009',
          d: 'Para Bolt, todos los días están de aventuras, peligros e intriga al menos hasta que las cámaras dejan de grabar, ya que es el protagonista de un famoso programa de televisión. Pero cuando es enviado accidentalmente a Nueva York, comienza su mayor aventura en un viaje campo a través por el mundo real.',
          elenco: 'Bolt y Penny están interpretadas por John Travolta y Miley Cyrus respectivamente',
          duracion: '2:28'
        },
        {
          id: 3,
          imagen: 'Spider.png',
          nombre: 'Spider Man',
          descripcion: 'Un araña de laboratorio ataca a Piter Parker y le da super poderes.',
          a: '2002',
          d: 'En una excursión de un curso de ciencias a un laboratorio de investigación, Peter es mordido por una araña genéticamente alterada. Como resultado, obtuvo habilidades sobrehumanas, reflejos rápidos, visión perfecta, fuerza superhumana y telarañas que salían de sus muñecas.',
          elenco: 'Peter Parker / Spider-Man ; Willem Dafoe. Personaje : Norman Osborn / el duende verde ; Kirsten Dunst. Personaje : Mary Jane Watson.',
          duracion: '2:18'
        }*/
      ],
      peliculaSeleccionada: null,
      viendoDetalles:false
    };
  },
  computed: {
    resultadosFiltrados() {
      // Filtra los resultados basados en la búsqueda actual
      return this.resultados.filter(resultado => 
      resultado.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
    }
  },
  created() {
    // Realizar una solicitud GET a la API para obtener los datos de las películas
    axios.get('http://localhost:3080/api/peliculas')
      .then(response => {
        console.log("Response data")
        this.resultados = response.data;
      })
      .catch(error => {
        console.error();
      });
},
  methods: {
    mostrarDetalles(pelicula) {
    this.peliculaSeleccionada = pelicula;
    this.viendoDetalles = true;
    //if(buscar==''){this.resultados=[];}
    this.busqueda = '';
    },
    ocultarDetalles(){
    this.peliculaSeleccionada = null;
    this.viendoDetalles=false;
    },
    buscar() {
      // No es necesario realizar ninguna acción aquí, los resultados se filtran en la computadora de resultadosFiltrados
    }
  }
};
</script>