const db = require('../models/student');
const Student = db.Studenttudent;


exports.createStudent = async (req, res) => {
    const { name, email, universityId } = req.body;
    console.log(req.body);

    try {
        const newStudent = await Student.create({
            name,
            email,
            universityId
        });

        res.status(201).json(newStudent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur est survenue lors de la création de l'étudiant"});
    }
};
