import { Registeredusersmodel } from "../models/Registeredusers.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    console.log("get api reached at backend");
    const getRegistered = await Registeredusersmodel.find();
    res.json(getRegistered);
  } catch (error) {
    console.log("not found");
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const addUsers = async (req, res) => {
  console.log("post api reached");

  const {
    fname,
    lname,
    email,
    password,
    age,
    gender,
    religion,
    phone,
    cast,
    country,
    city,
    image,
  } = req.body;

  try {
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    const newregistereduser = new Registeredusersmodel({
      fname: fname.toString(),
      lname: lname.toString(),
      email: email.toString(),
      password: hashedPassword, // Store the hashed password
      age: age.toString(),
      gender: gender.toString(),
      religion: religion.toString(),
      cast: cast.toString(),
      phone: phone.toString(),
      country: country.toString(),
      city: city.toString(),
      image: image.toString(),
    });

    await newregistereduser.save();
    res.json(newregistereduser);
  } catch (error) {
    console.log("not saved");
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    fname,
    lname,
    email,
    password,
    age,
    gender,
    religion,
    phone,
    cast,
    country,
    city,
  } = req.body;

  try {
    const updatedUser = await Registeredusersmodel.findByIdAndUpdate(
      id,
      {
        fname,
        lname,
        email,
        password,
        age,
        gender,
        religion,
        phone,
        cast,
        country,
        city,
      },
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
