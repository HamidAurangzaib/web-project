import express from 'express';
import { addUsers, getUsers, updateUser, deleteUser } from '../controllers/Registeredusers.js';

const router = express.Router();

router.post("/", addUsers);
router.get("/", getUsers);
router.put("/:id", updateUser); // Update user by ID
router.delete("/:id", deleteUser); // Delete user by ID

export default router;
