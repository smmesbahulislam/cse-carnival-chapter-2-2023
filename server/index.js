import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';


//configure env
dotenv.config();

//database connection
connectDB();

// rest object 
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);


//rest api
app.get('/',(req,res) => {
    res.send("<h1>Server is running</h1>")
})

app.use('/favicon.ico', (req, res) => res.status(204));


//port
const PORT = process.env.PORT || 5000;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white);
})