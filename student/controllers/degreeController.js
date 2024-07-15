const { Degree } = require('../models');

// Créer un nouveau diplôme
exports.createDegree = async (req, res) => {
  try {
    const { name } = req.body;
    const newDegree = await Degree.create({ name });
    res.status(201).json(newDegree);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Récupérer tous les diplômes
exports.getAllDegrees = async (req, res) => {
  try {
    const degrees = await Degree.findAll();
    res.status(200).json(degrees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un diplôme par ID
exports.getDegreeById = async (req, res) => {
  try {
    const degree = await Degree.findByPk(req.params.id);
    if (!degree) {
      return res.status(404).json({ error: 'Degree not found' });
    }
    res.status(200).json(degree);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un diplôme
exports.updateDegree = async (req, res) => {
  try {
    const { name } = req.body;
    const degree = await Degree.findByPk(req.params.id);
    if (!degree) {
      return res.status(404).json({ error: 'Degree not found' });
    }
    degree.name = name;
    await degree.save();
    res.status(200).json(degree);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un diplôme
exports.deleteDegree = async (req, res) => {
  try {
    const degree = await Degree.findByPk(req.params.id);
    if (!degree) {
      return res.status(404).json({ error: 'Degree not found' });
    }
    await degree.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
