const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Admission = sequelize.define('Admission', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
    defaultValue: 'pending'
  },
  studentId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Students',
      key: 'id'
    }
  },
  universityId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Universities',
      key: 'id'
    }
  },
  degreeId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Degrees',
      key: 'id'
    }
  }
});

module.exports = Admission;