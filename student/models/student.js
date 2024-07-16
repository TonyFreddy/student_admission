const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
   firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  averageScore: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  latestGraduationYear: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

module.exports = Student;