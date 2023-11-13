const { Sequelize } = require('sequelize');
const UserModel = require('./users.model.js');
const ProductModel = require('./products.model.js');
require('dotenv').config();

const sequelize = new Sequelize(
  {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  }
);

// 모델 초기화
const models = {
  User: UserModel(sequelize, Sequelize),
  Product: ProductModel(sequelize, Sequelize),
};

// 관계 설정
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = {
  sequelize,
  models,
};
