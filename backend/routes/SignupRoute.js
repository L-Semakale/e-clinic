app.post("/api/signup", async (req, res) => {
    try {
        console.log("Signup Request Body:", req.body);  // Debugging step

        const { username, password } = req.body;

        // Check if password is missing
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user to MongoDB (Ensure User model is defined)
        const user = new User({ username, password: hashedPassword });
        await user.save();

        res.json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ error: "Server error during signup" });
    }
});
