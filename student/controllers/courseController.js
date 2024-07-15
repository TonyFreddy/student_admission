const { Course, University, CourseProgram, CourseRegistration } = require('../models');

// Créer un nouveau cours
exports.createCourse = async (req, res) => {
  try {
    const { name, description, universityId, degree, credits } = req.body;
    const newCourse = await Course.create({
      name,
      description,
      universityId,
      degree,
      credits
    });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Récupérer tous les cours
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({
      include: [
        { model: University },
        { model: CourseProgram },
        { model: CourseRegistration }
      ]
    });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un cours par ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id, {
      include: [
        { model: University },
        { model: CourseProgram },
        { model: CourseRegistration }
      ]
    });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un cours
exports.updateCourse = async (req, res) => {
  try {
    const { name, description, universityId, degree, credits } = req.body;
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    course.name = name;
    course.description = description;
    course.universityId = universityId;
    course.degree = degree;
    course.credits = credits;
    await course.save();
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un cours
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    await course.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
