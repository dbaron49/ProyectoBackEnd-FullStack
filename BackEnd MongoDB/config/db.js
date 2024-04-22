const mongoose = require('mongoose');
require('dotenv').config();

// funcion para hacer la conexion a la BD

const conectarBd = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then (() => console.log('Estamos conectados con Mongo'))
    .catch ((err) => console.error(err));
}

module.exports = conectarBd;