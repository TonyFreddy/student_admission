const express = require('express');
const sequelize = require('./config/db.js');
const authRoutes = require('./routes/authRoutes');
const universityRoutes = require('./routes/universityRoutes');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const admissionRoutes = require('./routes/admissionRoutes');
const programRoutes = require('./routes/programRoutes');
require('dotenv').config();


const app = express();
app.use(express.json());



app.use('/api/auth', authRoutes);
app.use('/api/universities', universityRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/admissions', admissionRoutes);
app.use('/api/programs', programRoutes);

sequelize.sync({ force: true }).then(() => {
  console.log('Database connected and tables created');
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});