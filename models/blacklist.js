const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const BlacklistToken = sequelize.define('BlacklistToken', {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = BlacklistToken;
