const express = require("express");
const router = express.Router();
const util = require("util");
const jwt = require("jsonwebtoken");
const verifyAsync = util.promisify(jwt.verify);
const authenticate = require("../middlewares/auth-middleware.js");
const BlacklistToken = require("../models/blacklist.js");

// 내 정보 조회 API
router.get("/me", authenticate, (req, res) => {
  try {
    const user = req.user.get({ plain: true });
    delete user.password; // 비밀번호를 제외한 내 정보 반환
    delete user.createdAt; // 불필요한 정보 삭제
    delete user.updatedAt; // 불필요한 정보 삭제
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "서버에러가 발생했습니다." });
  }
});

//로그아웃
router.post("/logout", authenticate, async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    // 토큰 검증
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "토큰 검증에 실패했습니다." });
      }

      // 만료 시간 확인
      if (decoded.exp <= Date.now() / 1000) {
        return res.status(401).json({ error: "만료된 토큰입니다." });
      }

      // 블랙리스트에 토큰 추가
      await BlacklistToken.create({ token });
      res.status(200).json({ message: "로그아웃에 성공했습니다." });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "서버에러가 발생했습니다." });
  }
});
module.exports = router;
