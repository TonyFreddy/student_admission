const express = require('express');
const router = express.Router();
const degreeController = require('../controllers/degreeController');

router.post('/degrees', degreeController.createDegree);
router.get('/degrees', degreeController.getAllDegrees);
router.get('/degrees/:id', degreeController.getDegreeById);
router.put('/degrees/:id', degreeController.updateDegree);
router.delete('/degrees/:id', degreeController.deleteDegree);

module.exports = router;
