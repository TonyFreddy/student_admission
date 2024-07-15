const express = require('express');
const router = express.Router();
const courseRegistrationController = require('../controllers/course_registrationController');

router.post('/course-registrations', courseRegistrationController.createCourseRegistration);
router.get('/course-registrations', courseRegistrationController.getAllCourseRegistrations);
router.get('/course-registrations/:id', courseRegistrationController.getCourseRegistrationById);
router.put('/course-registrations/:id', courseRegistrationController.updateCourseRegistration);
router.delete('/course-registrations/:id', courseRegistrationController.deleteCourseRegistration);

module.exports = router;
