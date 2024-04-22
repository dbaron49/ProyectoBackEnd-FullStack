const express = require('express');
const conectarBd = require('../config/db');
const cors = require('cors');

// Llamar a express y configurar puerto de conexión
const app = express();
const port = 5000;
app.use(express.json());
//app.use('/apiClientes', require('../routes/RoutesCliente'));
app.use('/apiClientes', require('../routes/RoutesArticulo'));

// Enlazar la conexión de la BD
conectarBd();
app.use(cors());

// Se configura el puerto que va a tener el servidor
app.listen(port, () => console.log('El servidor se encuentra conectado http://localhost:5000'));

// Se prueba esta ruta en el navegador
app.get('/', (req, res) => {
    res.send('Bienvenido nuestro servidor esta configurado');
});


