
module.exports = (sequelize, DataTypes) => {
    const CourseProgram = sequelize.define('CourseProgram', {
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      programId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    CourseProgram.associate = (models) => {
      CourseProgram.belongsTo(models.Course, { foreignKey: 'courseId' });
      CourseProgram.belongsTo(models.Program, { foreignKey: 'programId' });
    };
  
    return CourseProgram;
  };
  