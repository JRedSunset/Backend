import express from 'express';
import AvionController from './Controller.js';

const AvionRouter = express.Router();

AvionRouter.get('/avion', AvionController.getAll);
AvionRouter.get('/avion/:id', AvionController.getByCode);
AvionRouter.post('/avion', AvionController.createAvion);
AvionRouter.put('/avion/:id', AvionController.updateAvion);
AvionRouter.delete('/avion/:id', AvionController.deleteAvion);

export default AvionRouter;
