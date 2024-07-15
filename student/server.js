const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const universityRoutes = require('./routes/university');
const studentRoutes = require('./routes/student');
const sequelize = require('./config/db.config'); 
require('dotenv').config();

const app = express();

app.use(bodyParser.json());


app.use('/auth', authRoutes);
app.use('/universities', universityRoutes);
app.use('/students', studentRoutes);

const PORT = 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
