const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const CourseRegistration = sequelize.define('CourseRegistration', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  studentId: {
    type: DataTypes.UUID,
    references: {
      model: 'Student',
      key: 'id'
    }
  },
  courseId: {
    type: DataTypes.UUID,
    references: {
      model: 'Course',
      key: 'id'
    }
  }
});

module.exports = CourseRegistration;