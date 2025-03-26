const isDoctor = (req, res, next) => {
  if (req.user.role !== "doctor") {
    return res.status(403).json({ message: "Access Denied! Doctors only." });
  }
  next();
};

module.exports = { verifyToken, isDoctor };
