const express = require('express');
const router = express.Router();
const programController = require('../controllers/programController');

router.post('/programs', programController.createProgram);
router.get('/programs', programController.getPrograms);
router.get('/programs/:id', programController.getProgram);
router.put('/programs/:id', programController.updateProgram);
router.delete('/programs/:id', programController.deleteProgram);

module.exports = router;