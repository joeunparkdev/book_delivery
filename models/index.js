const { Sequelize } = require("sequelize");
const UserModel = require("./users.model.js");
const ProductModel = require("./products.model.js");
const { config } = require("dotenv");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "mysql",
  database: config().parsed.DB_DATABASE,
  host: config().parsed.DB_HOST,
  username: config().parsed.DB_USER,
  password: config().parsed.DB_PASSWORD,
  logging: false,
});

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

sequelize
  .sync()
  .then(() => {
    console.log("모델과 데이터베이스가 동기화되었습니다.");
  })
  .catch((error) => {
    console.error("데이터베이스 동기화 중 오류 발생:", error);
  });

module.exports = { models, sequelize };
