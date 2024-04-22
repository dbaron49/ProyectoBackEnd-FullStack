import express from 'express';
import cors from 'cors';
// Importar la configuración de la BD
import BD from '../config/db.js';

// Importamos el archivo de las rutas
import CitasRoutes from '../routes/Routes_Citas.js';
import MedicosRoutes from '../routes/Routes_Medicos.js';

// Definir la variable APP para trabajar con express
const app = express();
app.use(cors());
app.use(express.json());
app.use('/citas', CitasRoutes);
app.use('/medicos', MedicosRoutes);

// Autenticación BD
try {
    await BD.authenticate();
    console.log('Conexión Exitosa a la Base de Datos');
} catch (error) {
    console.log('Ocurrio un Error al Conectarse a la Base de Datos', error);
}


// Muestra mensaje en el navegador
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Configuración del puerto del servidor
app.listen(5000, () => {
    console.log('El servidor esta corriendo en http://localhost:5000');
});

