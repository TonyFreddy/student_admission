const { Program, CourseProgram } = require('../models');

// Créer un nouveau programme
exports.createProgram = async (req, res) => {
  try {
    const { name, description, universityId } = req.body;
    const newProgram = await Program.create({
      name,
      description,
      universityId
    });
    res.status(201).json(newProgram);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Récupérer tous les programmes
exports.getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.findAll({
      include: [
        { model: CourseProgram }
      ]
    });
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un programme par ID
exports.getProgramById = async (req, res) => {
  try {
    const program = await Program.findByPk(req.params.id, {
      include: [
        { model: CourseProgram }
      ]
    });
    if (!program) {
      return res.status(404).json({ error: 'Program not found' });
    }
    res.status(200).json(program);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un programme
exports.updateProgram = async (req, res) => {
  try {
    const { name, description, universityId } = req.body;
    const program = await Program.findByPk(req.params.id);
    if (!program) {
      return res.status(404).json({ error: 'Program not found' });
    }
    program.name = name;
    program.description = description;
    program.universityId = universityId;
    await program.save();
    res.status(200).json(program);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un programme
exports.deleteProgram = async (req, res) => {
  try {
    const program = await Program.findByPk(req.params.id);
    if (!program) {
      return res.status(404).json({ error: 'Program not found' });
    }
    await program.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
