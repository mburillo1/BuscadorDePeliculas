const express = require('express');
const mongoose = require('mongoose');
const app = express();
var cors = require('cors')
const port = 3080;

app.use(cors())

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Db', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Conexión a MongoDB exitosa');
})
.catch(err => {
  console.error('Error de conexión a MongoDB:', err);
});

app.get('/', (req, res) => {
res.send('Hello World!')
})


// Importar las rutas
const routes = require('./routes');

// Usar las rutas en la aplicación
app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});