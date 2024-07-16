const Admission = require('../models/admission');

exports.createAdmission = async (req, res) => {
  try {
    const { studentId, universityId, status } = req.body;
    const admission = await Admission.create({ studentId, universityId, status });
    res.status(201).json(admission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.findAll();
    res.json(admissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAdmission = async (req, res) => {
  try {
    const { id } = req.params;
    const admission = await Admission.findByPk(id);
    if (!admission) {
      return res.status(404).json({ message: 'Admission not found' });
    }
    res.json(admission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAdmission = async (req, res) => {
  try {
    const { id } = req.params;
    const { studentId, universityId, status } = req.body;
    const admission = await Admission.update({ studentId, universityId, status }, { where: { id } });
    res.json({ message: 'Admission updated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteAdmission = async (req, res) => {
  try {
    const { id } = req.params;
    await Admission.destroy({ where: { id } });
    res.json({ message: 'Admission deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
