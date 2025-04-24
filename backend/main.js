import express from 'express';
import cors from 'cors';
import movieRoutes from './routes/movie.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', movieRoutes);

app.listen(8800);
