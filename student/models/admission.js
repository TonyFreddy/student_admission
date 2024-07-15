module.exports = (sequelize, DataTypes) => {
    const Admission = sequelize.define('Admission', {
      status: {
        type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
        allowNull: false,
        defaultValue: 'pending',
      },
      coverLetter: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      graduationYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      averageScore: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      degree: {
        type: DataTypes.ENUM('bachelor', 'master'),
        allowNull: false,
      },
      idCard: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      universityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    Admission.associate = (models) => {
      Admission.belongsTo(models.Student, { foreignKey: 'studentId' });
      Admission.belongsTo(models.University, { foreignKey: 'universityId' });
    };
  
    return Admission;
  };
  
