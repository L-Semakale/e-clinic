const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    console.log("🟡 Received Signup Data:", req.body);

    const { username, email, password, role } = req.body;

    if (!username || !email || !password || !role) {
      return res.status(400).json({ message: "⚠ All fields are required." });
    }

    if (!["patient", "doctor", "admin"].includes(role)) {
      return res.status(400).json({ message: `❌ Invalid role: ${role}` });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "🚫 Email already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id, role: newUser.role }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    console.log("✅ User registered:", newUser);

    res.status(201).json({
      message: "🎉 User registered successfully",
      token,
      user: { username: newUser.username, email: newUser.email, role: newUser.role },
    });
  } catch (error) {
    console.error("🔴 Signup Error:", error);
    res.status(500).json({ message: "🔥 Internal Server Error", error });
  }
});

module.exports = router;
