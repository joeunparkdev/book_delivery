const express = require('express');
const router = express.Router();
const { models } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// 회원가입 API
router.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;

  try {
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
      userId: newUser.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: "회원가입 중 오류가 발생했습니다." });
  }
});

// 로그인
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // 사용자 조회
    const foundUser = await models.User.findOne({
      where: { email: username  }, 
      
    });
    // 사용자가 존재하고 비밀번호가 일치하면 토큰 생성
    if (foundUser && bcrypt.compareSync(password, foundUser.password)) {
      const payload = {
        userId: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
      };

      // 환경 변수 등을 사용하여 안전한 방식으로 비밀 키 관리
      const secretKey = process.env.JWT_SECRET || 'your_fallback_secret_key';
      const token = jwt.sign(payload, secretKey, { expiresIn: '12h' });

      res.status(200).json({ accessToken: token });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});







module.exports = router;