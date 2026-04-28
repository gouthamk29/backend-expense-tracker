import express from 'express'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

import User from '../models/User.js';
import { validate } from '../middleware/validate.js';
import { loginSchema, registerSchema } from '../validators/authValidators.js';

const router = express.Router();

router.post("/register", validate(registerSchema), async (req, res) => {
   const { email, password } = req.validated.body;

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ msg: "User exists" });

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({ email, password: hashed });

  res.status(200).json({
        success:true,
        message:"Successfully Registered",
    })
});


router.post("/login", validate(loginSchema) ,async (req, res) => {
  const { email, password } = req.validated.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({ token });
});

export default router;