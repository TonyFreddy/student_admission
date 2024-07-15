const express = require('express');
const router = express.Router();
const admissionController = require('../controllers/admissionController');

router.post('/admissions', admissionController.createAdmission);
router.get('/admissions', admissionController.getAllAdmissions);
router.get('/admissions/:id', admissionController.getAdmissionById);
router.put('/admissions/:id', admissionController.updateAdmission);
router.delete('/admissions/:id', admissionController.deleteAdmission);

module.exports = router;
