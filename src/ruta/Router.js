import express from 'express';
import Controller from './Controller.js';

const RutaRouter = express.Router();

RutaRouter.get('/ruta', Controller.getAll);
RutaRouter.get('/ruta/:id', Controller.getByCode);
RutaRouter.post('/ruta', Controller.createRuta);
RutaRouter.put('/ruta/:id', Controller.updateRuta);
RutaRouter.delete('/ruta/:id', Controller.deleteRuta);

export default RutaRouter;
