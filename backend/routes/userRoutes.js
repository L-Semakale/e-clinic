const express = require('express');
const router = express.Router();

// Example POST /api/auth/register
router.post('/register', (req, res) => {
  res.json({ message: 'User registered successfully' });
});

module.exports = router;
