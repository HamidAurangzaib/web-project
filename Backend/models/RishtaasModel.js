import mongoose from "mongoose";

const rishtaStructure = new mongoose.Schema({
  id: Number,
  Name: String,
  Age: Number,
  Description: String,
});

const rishtaModel = mongoose.Model("Rishta", rishtaStructure);
