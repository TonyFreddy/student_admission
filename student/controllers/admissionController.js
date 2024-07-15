const { Admission, Student, University } = require('../models');

// Créer une nouvelle admission
exports.createAdmission = async (req, res) => {
  try {
    const { status, coverLetter, graduationYear, averageScore, degree, idCard, studentId, universityId } = req.body;
    const newAdmission = await Admission.create({
      status,
      coverLetter,
      graduationYear,
      averageScore,
      degree,
      idCard,
      studentId,
      universityId
    });
    res.status(201).json(newAdmission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Récupérer toutes les admissions
exports.getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.findAll({
      include: [
        { model: Student },
        { model: University }
      ]
    });
    res.status(200).json(admissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer une admission par ID
exports.getAdmissionById = async (req, res) => {
  try {
    const admission = await Admission.findByPk(req.params.id, {
      include: [
        { model: Student },
        { model: University }
      ]
    });
    if (!admission) {
      return res.status(404).json({ error: 'Admission not found' });
    }
    res.status(200).json(admission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une admission
exports.updateAdmission = async (req, res) => {
  try {
    const { status, coverLetter, graduationYear, averageScore, degree, idCard, studentId, universityId } = req.body;
    const admission = await Admission.findByPk(req.params.id);
    if (!admission) {
      return res.status(404).json({ error: 'Admission not found' });
    }
    admission.status = status;
    admission.coverLetter = coverLetter;
    admission.graduationYear = graduationYear;
    admission.averageScore = averageScore;
    admission.degree = degree;
    admission.idCard = idCard;
    admission.studentId = studentId;
    admission.universityId = universityId;
    await admission.save();
    res.status(200).json(admission);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer une admission
exports.deleteAdmission = async (req, res) => {
  try {
    const admission = await Admission.findByPk(req.params.id);
    if (!admission) {
      return res.status(404).json({ error: 'Admission not found' });
    }
    await admission.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
