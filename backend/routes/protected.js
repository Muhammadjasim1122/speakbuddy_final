const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

// Protected Route Example
router.get('/dashboard', auth, (req, res) => {
  res.json({ msg: 'Welcome to your dashboard!', user: req.user });
});

module.exports = router;
