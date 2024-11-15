import express from 'express';
import Controller from './Controller.js';

const AvionesRouter = express.Router();


AvionesRouter.get('/aviones', Controller.getAll);
AvionesRouter.post('/aviones', Controller.createAvion);


export default AvionesRouter;