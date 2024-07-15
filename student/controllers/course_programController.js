const { CourseProgram, Course, Program } = require('../models');

// Créer une nouvelle relation CourseProgram
exports.createCourseProgram = async (req, res) => {
  try {
    const { courseId, programId } = req.body;
    const newCourseProgram = await CourseProgram.create({
      courseId,
      programId
    });
    res.status(201).json(newCourseProgram);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Récupérer toutes les relations CourseProgram
exports.getAllCoursePrograms = async (req, res) => {
  try {
    const coursePrograms = await CourseProgram.findAll({
      include: [
        { model: Course },
        { model: Program }
      ]
    });
    res.status(200).json(coursePrograms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer une relation CourseProgram par ID
exports.getCourseProgramById = async (req, res) => {
  try {
    const courseProgram = await CourseProgram.findByPk(req.params.id, {
      include: [
        { model: Course },
        { model: Program }
      ]
    });
    if (!courseProgram) {
      return res.status(404).json({ error: 'CourseProgram not found' });
    }
    res.status(200).json(courseProgram);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une relation CourseProgram
exports.updateCourseProgram = async (req, res) => {
  try {
    const { courseId, programId } = req.body;
    const courseProgram = await CourseProgram.findByPk(req.params.id);
    if (!courseProgram) {
      return res.status(404).json({ error: 'CourseProgram not found' });
    }
    courseProgram.courseId = courseId;
    courseProgram.programId = programId;
    await courseProgram.save();
    res.status(200).json(courseProgram);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer une relation CourseProgram
exports.deleteCourseProgram = async (req, res) => {
  try {
    const courseProgram = await CourseProgram.findByPk(req.params.id);
    if (!courseProgram) {
      return res.status(404).json({ error: 'CourseProgram not found' });
    }
    await courseProgram.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
