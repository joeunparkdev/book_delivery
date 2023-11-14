const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticate = require('../middlewares/auth-middleware.js'); 

// 내 정보 조회 API
router.get('/me', authenticate, (req, res) => {
  try {
    const user = req.user.toJSON();
    delete user.password; // 비밀번호를 제외한 내 정보 반환
    delete user.createdAt; // 불필요한 정보 삭제
    delete user.updatedAt; // 불필요한 정보 삭제
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//로그아웃
router.post('/logout', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  blacklist.push(token);

  res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;

