const mongoose = require('mongoose');

const articuloSchema = mongoose.Schema({
    
    nombre: {
        type: String,
        required: true     
    },

    seccion: {
        type: String,
        required: true
    },

    cantidad: {
        type: Number,
        required: true
    },

    precio: {
        type: Number,
        required: true
    },

},{versionkey: false});

module.exports = mongoose.model('Articulo', articuloSchema);