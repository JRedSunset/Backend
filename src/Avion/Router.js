import express from 'express';
import Controller from './Controler.js';

const AvionesRouter = express.Router();


AvionesRouter.get('/aviones', Controller.getAll);
AvionesRouter.post('/aviones', Controller.createAvion);


export default AvionesRouter;