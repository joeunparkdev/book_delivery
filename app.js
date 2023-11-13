const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middlewares/auth-middleware");
const { models } = require('./models');
const userModel = models.User;
const { Op } = require('sequelize');
const { Sequelize } = require('sequelize');
const config = require('./config.json');

const sequelize = new Sequelize(config.development);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('데이터베이스에 성공적으로 연결되었습니다.');
  } catch (error) {
    console.error('데이터베이스에 연결할 수 없습니다:', error);
  }
})();

const app = express();
const router = express.Router();

app.use("/api", express.urlencoded({ extended: false }), router);
app.use(express.static("assets"));

// sign up
router.post("/users", async (req, res) => {
  const { email, username, password, confirmPassword } = req.body;

  // 이메일 유효성 검사
  if (!isValidEmail(email)) {
    res.status(400).send({
      errorMessage: "유효한 이메일 주소를 입력해주세요.",
    });
    return;
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    if (password !== confirmPassword) {
      res.status(400).send({
        errorMessage: "패스워드가 패스워드 확인란과 다릅니다.",
      });
      return;
    }
    console.log('Email to be checked:', email); // Log the email value

    const existsUsers = await userModel.findOne({
      where: {
        [Op.or]: [{ email }, { username }],
      },
    });
    console.log('existsUsers:', existsUsers); 

    if (existsUsers) {
      res.status(400).send({
        errorMessage: "이메일 또는 닉네임이 이미 사용중입니다.",
      });
      return;
    }

    // Sequelize 모델을 사용하여 유저 생성
    const user = await userModel.create({
      username,
      password: hashPassword,
      email,
    });

    res.status(201).send({});
  } catch (error) {
    console.error("Error during sign up:", error);
    res.status(500).json({ errorMessage: "서버 오류가 발생했습니다." });
  }
});

// login
router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ where: { email } });

  if (!user) {
    res.status(400).send({
      errorMessage: "이메일 또는 패스워드가 틀렸습니다.",
    });
    return;
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(400).send({
        errorMessage: "이메일 또는 패스워드가 틀렸습니다.",
      });
    } else {
      res.send({
        token: jwt.sign({ userId: user.userId }, "customized-secret-key"),
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ errorMessage: "서버 오류가 발생했습니다." });
  }
});

// 이메일 유효성 검사 함수
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

router.get("/users/me", authMiddleware, async (req, res) => {
  res.send({ user: res.locals.user });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`서버가 요청을 받을 준비가 됐어요. 포트: ${PORT}`);
});
