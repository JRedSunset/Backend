// index.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


import AvionesRouter from './src/avion/Router.js';
import UbicacionRouter from './src/ubicacion/Router.js';

const app = express();
const PORT = 4000;
var corsOptions = {
    origin: "*",
};


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', AvionesRouter);
app.use('/api', UbicacionRouter);


app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is running on port ${PORT}`);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});
