import express from 'express';
import { agregarMedicos, eliminarMedico, modificarMedico, mostrarMedicos, mostrarUnMedico } from '../controllers/MedicosController.js';

const router = express.Router();

router.post('/', agregarMedicos);
router.get('/', mostrarMedicos);
router.get('/:id', mostrarUnMedico);
router.put('/:id', modificarMedico);
router.delete('/:id', eliminarMedico);

export default router;