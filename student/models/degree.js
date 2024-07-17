const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db.js');

const Degree = sequelize.define('Degree', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: { 
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Degree;