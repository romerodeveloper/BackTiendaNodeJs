import express from 'express';
import cors from 'cors';
import tiendasRoutes from './routes/tiendas.routes.js';
import articulosRoutes from './routes/articulos.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';

const app = express();
const URL = '/api';

//middlewares
const corsOptions = {
    origin: 'http://localhost:4200', 
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions)); 
app.use(express.json());


app.use(URL, tiendasRoutes);
app.use(URL, articulosRoutes);
app.use(URL, usuariosRoutes);

export default app;