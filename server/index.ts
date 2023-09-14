import express from 'express';
import { router } from './routes/routes';
import { db } from './db';
import morgan from 'morgan';

const app = express();

db;

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
  
app.use(express.json());
app.use(morgan("dev"));
app.use('/',router);
const PORT = 3001
app.listen(PORT, () => {
    console.log(`el puerto ${PORT} esta conectado`)
})
