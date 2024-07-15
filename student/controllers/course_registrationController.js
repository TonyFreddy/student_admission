const { CourseRegistration, Student, Course } = require('../models');

// Créer une nouvelle relation CourseRegistration
exports.createCourseRegistration = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;
    const newCourseRegistration = await CourseRegistration.create({
      studentId,
      courseId
    });
    res.status(201).json(newCourseRegistration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Récupérer toutes les relations CourseRegistration
exports.getAllCourseRegistrations = async (req, res) => {
  try {
    const courseRegistrations = await CourseRegistration.findAll({
      include: [
        { model: Student },
        { model: Course }
      ]
    });
    res.status(200).json(courseRegistrations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer une relation CourseRegistration 
exports.getCourseRegistrationById = async (req, res) => {
  try {
    const courseRegistration = await CourseRegistration.findByPk(req.params.id, {
      include: [
        { model: Student },
        { model: Course }
      ]
    });
    if (!courseRegistration) {
      return res.status(404).json({ error: 'CourseRegistration not found' });
    }
    res.status(200).json(courseRegistration);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une relation CourseRegistration
exports.updateCourseRegistration = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;
    const courseRegistration = await CourseRegistration.findByPk(req.params.id);
    if (!courseRegistration) {
      return res.status(404).json({ error: 'CourseRegistration not found' });
    }
    courseRegistration.studentId = studentId;
    courseRegistration.courseId = courseId;
    await courseRegistration.save();
    res.status(200).json(courseRegistration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer une relation CourseRegistration
exports.deleteCourseRegistration = async (req, res) => {
  try {
    const courseRegistration = await CourseRegistration.findByPk(req.params.id);
    if (!courseRegistration) {
      return res.status(404).json({ error: 'CourseRegistration not found' });
    }
    await courseRegistration.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
