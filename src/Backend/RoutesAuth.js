import { Router } from "express";
import { hash, compare } from "bcrypt";
import User, { findOne } from "../models/User";
const router = Router();

// Signup Route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await findOne({ email });
    if (user && (await compare(password, user.password))) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

export default router;
