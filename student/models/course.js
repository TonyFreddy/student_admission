module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
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
      degree: {
        type: DataTypes.ENUM('bachelor', 'master', 'PhD'),
        allowNull: false,
      },
      credits: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    Course.associate = (models) => {
      Course.belongsTo(models.University, { foreignKey: 'universityId' });
      Course.hasMany(models.CourseProgram, { foreignKey: 'courseId' });
      Course.hasMany(models.CourseRegistration, { foreignKey: 'courseId' });
    };
  
    return Course;
  };
  