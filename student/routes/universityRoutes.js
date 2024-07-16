const express = require('express');
const router = express.Router();
const universityController = require('../controllers/universityController');

router.post('/universities', universityController.createUniversity);
router.get('/universities', universityController.getUniversities);
router.get('/universities/:id', universityController.getUniversity);
router.put('/universities/:id', universityController.updateUniversity);
router.delete('/universities/:id', universityController.deleteUniversity);

module.exports = router;