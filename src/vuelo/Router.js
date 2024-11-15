import express from 'express';
import VueloController from './Controller.js';

const VueloRouter = express.Router();

VueloRouter.get('/vuelos', VueloController.getAll);
VueloRouter.get('/vuelos/:id', VueloController.getByCode);
VueloRouter.post('/vuelos', VueloController.createVuelo);
VueloRouter.put('/vuelos/:id', VueloController.updateVuelo);
VueloRouter.delete('/vuelos/:id', VueloController.deleteVuelo);

export default VueloRouter;
