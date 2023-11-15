const express = require("express");
const router = express.Router();
const { models } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

// 회원가입 API
router.post("/signup", async (req, res) => {
  const { username, password, confirmPassword, email } = req.body;
  try {
    //이메일 형식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ errorMessage: "잘못된 이메일 형식입니다." });
    }

    //비밀번호 형식
    if (password.length < 6 || password !== confirmPassword) {
      return res
        .status(400)
        .json({ errorMessage: "이메일또는 비밀번호 형식이 잘못되었습니다." });
    }

    //이미 등록된 이메일
    const existingUser = await models.User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ errorMessage: "이미 등록된 이메일 입니다." });
    }

    // 패스워드를 해시로 변환
    const hashPassword = await bcrypt.hash(password, 10);

    // Sequelize를 사용하여 유저 생성
    const newUser = await models.User.create({
      username,
      password: hashPassword,
      email,
    });

    res.json({
      message: "회원가입이 완료되었습니다.",
      user: {
        userId: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: "회원가입 중 오류가 발생했습니다." });
  }
});

// 로그인
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // 사용자 조회
    const foundUser = await models.User.findOne({
      where: {
        // email 필드 대신 username 필드를 사용하도록 수정
        [Op.or]: [{ email: username }, { username: username }],
      },
    });

    // 사용자가 존재하고 비밀번호가 일치하면 토큰 생성
    if (foundUser && bcrypt.compareSync(password, foundUser.password)) {
      const payload = {
        userId: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
      };

      // 환경 변수 등을 사용하여 안전한 방식으로 비밀 키 관리
      const secretKey = process.env.JWT_SECRET || "your_fallback_secret_key";
      const token = jwt.sign(payload, secretKey, { expiresIn: "12h" });

      res.status(200).json({ accessToken: token });
    } else {
      res.status(401).json({ error: "잘못된 닉네임 또는 비밀번호입니다." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "서버에러가 발생했습니다." });
  }
});

module.exports = router;
