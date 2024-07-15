module.exports = (sequelize, DataTypes) => {
    const University = sequelize.define('University', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    });
  
    University.associate = (models) => {
      University.hasMany(models.Course, { foreignKey: 'universityId' });
      University.hasMany(models.Admission, { foreignKey: 'universityId' });
    };
  
    return University;
  };
  