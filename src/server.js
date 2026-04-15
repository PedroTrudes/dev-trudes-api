import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
import contactRoutes from './routes/contact.routes.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor rodando na porta" , PORT)
})