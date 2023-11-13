const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Product = (sequelize, DataTypes) => {
  const model = sequelize.define('product', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('FOR_SALE', 'SOLD_OUT'),
      allowNull: false,
      defaultValue: 'FOR_SALE',
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  model.associate = (models) => {
    model.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  
  
  return model;
};

module.exports = (sequelize, DataTypes) => Product(sequelize, DataTypes);
