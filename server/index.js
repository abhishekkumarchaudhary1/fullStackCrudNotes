import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express'
import apiRouter from './routes/api.js'
import connectDB from './db/index.js';
dotenv.config(
    {
        path: './.env'
    }
)
connectDB();
const app = express();
app.use(express.json());
app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

