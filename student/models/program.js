module.exports = (sequelize, DataTypes) => {
    const Program = sequelize.define('Program', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      universityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    Program.associate = (models) => {
      Program.hasMany(models.CourseProgram, { foreignKey: 'programId' });
    };
  
    return Program;
  };
  