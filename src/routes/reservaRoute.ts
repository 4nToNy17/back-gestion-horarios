import express, { Router } from 'express';
import { eliminarReserva, insertarReserva, listarReserva, modificarReserva, obtenerReserva } from '../controllers/reservaController';

const router: Router = express.Router();

router.post('/',insertarReserva);
router.get('/',listarReserva);
router.get('/:id',obtenerReserva);
router.put('/:id',modificarReserva);
router.delete('/:id',eliminarReserva);

export default router;