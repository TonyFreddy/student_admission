const express = require('express');
const { authenticateToken, authorizeRole } = require('../middleware/auth');
const { University } = require('../models/university');

const router = express.Router();

router.post('/', authenticateToken, authorizeRole('admin'), async (req, res) => {
  const { name, location } = req.body;
  try {
    const university = await University.create({ name, location });
    res.status(201).json(university);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const universities = await University.findAll();
    res.json(universities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
