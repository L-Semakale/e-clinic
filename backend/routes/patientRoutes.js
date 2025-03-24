const express = require("express");
const Patient = require("../models/Patient");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

// 📌 Create a new patient (Admins only)
router.post("/", verifyToken, isAdmin, async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 📌 Get all patients (Only logged-in users)
router.get("/", verifyToken, async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Update a patient (Admins only)
router.put("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPatient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 📌 Delete a patient (Admins only)
router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
