// middleware/auth-middleware.js

const jwt = require("jsonwebtoken");
const { models } = require('../models');
const userModel = models.User;

async function authMiddleware(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "your-secret-key"); // your-secret-key는 실제로 사용하는 토큰 서명 키로 대체되어야 합니다.

    // 토큰이 정상적으로 해독되었을 때, 해당 사용자 정보를 가져와서 req.locals.user에 저장
    const user = await userModel.findByPk(decoded.userId);
    if (!user) {
      return res.status(401).json({ error: "Unauthorized - User not found" });
    }

    req.locals.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized - Invalid token" });
  }
}

module.exports = authMiddleware;
