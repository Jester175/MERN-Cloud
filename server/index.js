import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js';
import fileRouter from './routes/file.route.js';
import corsMiddleware from './middleware/cors.middleware.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const PASSWORD_DB = process.env.PASSWORD_DB;
const USERNAME_DB = process.env.USERNAME_DB;
const DB_URL = `mongodb+srv://${USERNAME_DB}:${PASSWORD_DB}@cluster0.nedwf0a.mongodb.net/?retryWrites=true&w=majority`

app.use(corsMiddleware);
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/file', fileRouter);


const startApp = async () => {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`Server started on ${PORT}, http://localhost:${PORT}`));
    } catch (error) {
        console.log(error.message)
    }
}

startApp();