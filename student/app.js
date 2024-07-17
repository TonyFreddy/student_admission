const express = require('express');
const sequelize = require('./config/db.js');
const dbConnexion = require('./config/db.js');
const authRoutes = require('./routes/authRoutes');
const universityRoutes = require('./routes/universityRoutes');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const admissionRoutes = require('./routes/admissionRoutes');
const programRoutes = require('./routes/programRoutes');
require('dotenv').config();

const PORT = 4000;
const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/universities', universityRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/admissions', admissionRoutes);
app.use('/api/programs', programRoutes);

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
