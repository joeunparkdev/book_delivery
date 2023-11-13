const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");

// 회원가입 API
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    // 패스워드를 해시로 변환
    const hashPassword = await bcrypt.hash(password, 10);

    // Sequelize를 사용하여 유저 생성
    const newUser = await User.create({
      username,
      password: hashPassword,
    });

    res.json({
      message: "회원가입이 완료되었습니다.",
      userId: newUser.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: "회원가입 중 오류가 발생했습니다." });
  }
});

// 로그인 API
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // 유저 조회
    const user = await User.findOne({
      where: { username },
    });

    if (!user) {
      return res.status(404).json({ errorMessage: "존재하지 않는 사용자입니다." });
    }

    // 비밀번호 확인
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(403).json({ errorMessage: "비밀번호가 일치하지 않습니다." });
    }

    // JWT AccessToken 생성
    const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    res.json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: "로그인 중 오류가 발생했습니다." });
  }
});

// 내 정보 조회 API
router.get("/me", authenticate, async (req, res) => {
  try {
    const user = req.user.toJSON();
    // 비밀번호를 제외한 내 정보를 반환
    delete user.password;
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 인증 미들웨어
function authenticate(req, res, next) {
  const { authorization } = req.headers;
  const [authType, authToken] = (authorization || "").split(" ");

  if (!authToken || authType !== "Bearer") {
    res.status(401).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다.",
    });
    return;
  }

  try {
    // secret key를 환경 변수로 관리
    const { userId } = jwt.verify(authToken, process.env.JWT_SECRET);
    User.findByPk(userId).then((user) => {
      req.user = user;
      next();
    });
  } catch (err) {
    res.status(401).send({
      errorMessage: "로그인 후 이용 가능한 기능입니다.",
    });
  }
}

module.exports = router;
