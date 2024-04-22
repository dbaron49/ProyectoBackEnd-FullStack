const express = require('express');
const router = express.Router();
const CLienteController = require('../controllers/ClienteController');

// Aca vna las rutas del CRUD
router.post('/', CLienteController.agregarClientes);
router.get('/', CLienteController.mostrarClientes);
router.get('/:id', CLienteController.mostrarUnCliente);
router.delete('/:id', CLienteController.eliminarClientes);
//router.patch('/:id', CLienteController.modificarClientes);
//router.put('/:id', CLienteController.actualizarCliente);
router.put('/:id', CLienteController.ActualizarCliente);


module.exports = router;