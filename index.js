import express from "express";
import { connectDB } from "./database.js";
import users from "./routes/users.routes.js";
import http from "http";
import cors from "cors";
import * as dotenv from 'dotenv';
dotenv.config();

import morgan from 'morgan';
import bodyParser from "body-parser";
const app = express();

//Settings 
app.set('port', process.env.PORT)
const server = http.createServer(app);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());
//Routes

app.use('/users', users);

//Static files

server.listen(app.get('port'), () => {
    connectDB();
    console.log(`Server on port ${app.get('port')}`);
})