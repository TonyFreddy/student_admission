const express = require('express');
const { authenticateToken, authorizeRole } = require('../middleware/auth');
const { Student, User } = require('../models/student');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.post('/', authenticateToken, authorizeRole('student'), async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const student = await Student.create({ firstName, lastName, userId: req.user.id });
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', authenticateToken, authorizeRole('student'), async (req, res) => {
  try {
    const student = await Student.findOne({ where: { userId: req.params.id }, include: [User] });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post('/', authenticateToken, studentController.createStudent);

module.exports = router;
