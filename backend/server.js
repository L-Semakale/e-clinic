const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes"); // Ensure correct path

const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON data
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/eclinic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));

app.listen(5000, () => console.log("Server running on port 5000"));
