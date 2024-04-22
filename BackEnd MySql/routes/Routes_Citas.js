// Importar
import express from 'express';
import { agregarCitas, eliminarCita, getAllCitas, getCita, modificarCita } from '../controllers/CitasController.js';

const router = express.Router();

router.post('/', agregarCitas);
router.get('/', getAllCitas);
router.get('/:id', getCita);
router.put('/:id', modificarCita);
router.delete('/:id', eliminarCita);

export default router;