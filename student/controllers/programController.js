const Program = require('../models/program');

exports.createProgram = async (req, res) => {
  try {
    const { name, description } = req.body;
    const program = await Program.create({ name, description });
    res.status(201).json(program);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPrograms = async (req, res) => {
  try {
    const programs = await Program.findAll();
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const program = await Program.findByPk(id);
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    res.json(program);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const program = await Program.update({ name, description }, { where: { id } });
    res.json({ message: 'Program updated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProgram = async (req, res) => {
  try {
    const { id } = req.params;
    await Program.destroy({ where: { id } });
    res.json({ message: 'Program deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};