import express from "express";
import dotenv from 'dotenv';

// application is defined here and configured

dotenv.config();

const app: express.Application = express();


app.use(express.json());


export default app;