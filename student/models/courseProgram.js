const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db.js');

const CourseProgram = sequelize.define('CourseProgram', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  courseId: {
    type: DataTypes.UUID,
    references: {
      model: 'Course',
      key: 'id'
    }
  },
  programId: {
    type: DataTypes.UUID,
    references: {
      model: 'Program',
      key: 'id'
    }
  }
});

module.exports = CourseProgram;