const University = require('../models/university');

exports.createUniversity = async (req, res) => {
  try {
    const { name, description } = req.body;
    const university = await University.create({ name, description });
    res.status(201).json(university);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUniversities = async (req, res) => {
  try {
    const universities = await University.findAll();
    res.json(universities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUniversity = async (req, res) => {
  try {
    const { id } = req.params;
    const university = await University.findByPk(id);
    if (!university) {
      return res.status(404).json({ message: 'University not found' });
    }
    res.json(university);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUniversity = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const university = await University.update({ name, description }, { where: { id } });
    res.json({ message: 'University updated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUniversity = async (req, res) => {
  try {
    const { id } = req.params;
    await University.destroy({ where: { id } });
    res.json({ message: 'University deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};