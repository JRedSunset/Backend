import express from 'express';
import ReservacionController from './Controller.js';

const ReservacionRouter = express.Router();

ReservacionRouter.get('/reservacion', ReservacionController.getAll);
ReservacionRouter.get('/reservacion/:id', ReservacionController.getByCode);
ReservacionRouter.post('/reservacion', ReservacionController.createReservacion);
ReservacionRouter.put('/reservacion/:id', ReservacionController.updateReservacion);
ReservacionRouter.delete('/reservacion/:id', ReservacionController.deleteReservacion);
ReservacionRouter.post('/reservacion/pasajero', ReservacionController.createPasajero);

export default ReservacionRouter;
