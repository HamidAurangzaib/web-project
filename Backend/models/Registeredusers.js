import mongoose, { mongo } from "mongoose";

const Registeredusersstruc= mongoose.Schema({
    
    fname : String,
    lname : String,
    email: String,
    password: String,
    age: Number,
    gender:  String,
religion:  String,
cast: String,
phone: Number,
city:  String,
country: String ,






});
export const Registeredusersmodel= mongoose.model('Registereduser',Registeredusersstruc);
