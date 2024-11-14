import express from 'express';
import Controller from './Controler.js';

const UbicacionRouter = express.Router();

UbicacionRouter.get('/ubicacion', Controller.getAll);
UbicacionRouter.get('/ubicacion/:id', Controller.getByCode);
UbicacionRouter.post('/ubicacion', Controller.createUbicacion);
UbicacionRouter.put('/ubicacion/:id', Controller.updateUbicacion);
UbicacionRouter.delete('/ubicacion/:id', Controller.deleteUbicacion);

export default UbicacionRouter;
