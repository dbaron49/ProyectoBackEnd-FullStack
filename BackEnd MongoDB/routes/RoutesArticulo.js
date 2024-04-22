const express = require('express');
const router = express.Router();
const ArticuloController = require('../controllers/ArticuloController');

router.post('/articulos', ArticuloController.agregarArticulos);
router.get('/articulos', ArticuloController.obtenerArticulos);
router.get('/articulos/:id', ArticuloController.mostrarUnArticulo);
router.delete('/articulos/:id', ArticuloController.eliminarArticulos);
//router.patch('/articulos/:id', ArticuloController.modificarArticulos);
router.put('/articulos/:id', ArticuloController.actualizarArticulos);


module.exports = router;