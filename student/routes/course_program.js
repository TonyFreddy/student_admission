const express = require('express');
const router = express.Router();
const courseProgramController = require('../controllers/course_programController');

router.post('/course-programs', courseProgramController.createCourseProgram);
router.get('/course-programs', courseProgramController.getAllCoursePrograms);
router.get('/course-programs/:id', courseProgramController.getCourseProgramById);
router.put('/course-programs/:id', courseProgramController.updateCourseProgram);
router.delete('/course-programs/:id', courseProgramController.deleteCourseProgram);

module.exports = router;
