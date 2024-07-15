module.exports = (sequelize, DataTypes) => {
    const CourseRegistration = sequelize.define('CourseRegistration', {
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    CourseRegistration.associate = (models) => {
      CourseRegistration.belongsTo(models.Student, { foreignKey: 'studentId' });
      CourseRegistration.belongsTo(models.Course, { foreignKey: 'courseId' });
    };
  
    return CourseRegistration;
  };
  