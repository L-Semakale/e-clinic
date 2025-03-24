const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

// 📌 USER REGISTRATION
router.post("/register", async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // ✅ Check if user already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // ✅ Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // ✅ Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role: role || "user" // Default to "user"
        });

        await newUser.save();

        // ✅ Generate JWT token
        const token = jwt.sign(
            { id: newUser._id, role: newUser.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// 📌 UPDATE USER PROFILE
router.put("/update", verifyToken, async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userId = req.user.id; // Extract user ID from JWT

        // ✅ Find the user
        let user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        // ✅ Update fields if provided
        if (username) user.username = username;
        if (email) user.email = email;

        // ✅ If updating password, hash it before saving
        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        await user.save();

        res.status(200).json({ message: "Profile updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

console.log("verifyToken:", verifyToken);
module.exports = router;