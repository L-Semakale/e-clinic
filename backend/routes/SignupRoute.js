const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User"); // Adjust path

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        console.log("Request received:", req.body);

        const { email, phone, role, password } = req.body;
        if (!email || !phone || !role || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, phone, role, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ error: "Server error during signup" });
    }
});

module.exports = router;
