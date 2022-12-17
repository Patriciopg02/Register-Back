import mongoose from "mongoose";
mongoose.set('strictQuery', true);
import * as dotenv from 'dotenv';
dotenv.config();

export async function connectDB() {
    console.log('connect db Users');
    await mongoose.connect(process.env.MONGO)
}
