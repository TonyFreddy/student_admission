module.exports = (sequelize, DataTypes) => {
    const Degree = sequelize.define('Degree', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Degree;
  };
  