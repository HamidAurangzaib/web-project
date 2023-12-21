import { Registeredusersmodel } from "../models/Registeredusers.js";
import bcrypt from "bcrypt";
export const getUsers= async(req,res)=>{

    try{
        console.log("get api reached at backend");
         const getRegistered= await Registeredusersmodel.find();
         res.json(getRegistered);
    }catch (error){
        console.log("not found");
    }
}

export const addUsers= async(req,res)=>{
    console.log("post api reached");
    const fname= req.body.fname;
    const fnameins= fname.toString();
    const lname= req.body.lname;
    const lnameins= lname.toString();
    const email= req.body.email;
    const emailins= email.toString();
    const password= req.body.password;
    const passwordins= password.toString();
    const age= req.body.age;
    const ageins= age.toString();
    const gender= req.body.gender;
    const genderins= gender.toString();
    const religion = req.body.religion; // No need to convert it explicitly
    const religionins= religion.toString();
    const cast = req.body.cast; // No need to convert it explicitly
    const castins= cast.toString();
    const phone = req.body.phone; // No need to convert it explicitly
    const phoneins= phone.toString();
    const city = req.body.city; // No need to convert it explicitly
    const cityins= city.toString();
    const country = req.body.country; // No need to convert it explicitly
    const countryins= country.toString();
    const image = req.body.image;
    const imageins= image.toString();
    const newregistereduser= new Registeredusersmodel({
        fname: fnameins,
        lname: lnameins,
        email: emailins,
        password: passwordins,
        age: ageins,
        gender: genderins,
        religion: religionins,
        cast: castins,
        phone:phoneins,
        country:countryins,
        city:cityins,
        image:imageins
      


    });
    try{
        await newregistereduser.save();
        res.json(newregistereduser);
    } catch(error){
        console.log("not saved");
    }
}



export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { fname, lname, email, password,age, gender, religion, phone, cast, country, city } = req.body;
  
    try {
      const updatedUser = await Registeredusersmodel.findByIdAndUpdate(
        id,
        { fname, lname, email, password, age, gender, religion, phone, cast, country, city },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

  export const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedUser = await Registeredusersmodel.findByIdAndDelete(id);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  