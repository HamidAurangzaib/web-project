import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import Registeredusers from './routes/Registeredusers.js'

import { Registeredusersmodel } from './models/Registeredusers.js';

const app= express();


const url="mongodb+srv://hamid:hamid123@cluster0.jdresm3.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url).then(()=>console.log("connected to db.."));
app.listen(5000);

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/signup",Registeredusers);
app.use("/admin",Registeredusers);
app.use("/rishtaas",Registeredusers);
