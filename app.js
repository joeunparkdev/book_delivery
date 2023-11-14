const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middlewares/auth-middleware.js");
const { sequelize, user, product } = require('./models');
const { Op } = require('sequelize');
const config = require('./config/config.cjs');
const productsRouter = require("./routers/products.router.js");
const usersRouter = require("./routers/users.router.js");
const authRouter = require("./routers/auth.router.js");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static("assets"));
app.use(express.json());
sequelize.sync();

app.use("/api/auth", express.urlencoded({ extended: false }), authRouter);
app.use("/api/users", authMiddleware, usersRouter);
app.use("/api/products", authMiddleware, productsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`서버가 요청을 받을 준비가 됐어요. 포트: ${PORT}`);
});
