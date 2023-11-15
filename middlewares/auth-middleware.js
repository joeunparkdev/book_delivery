const jwt = require("jsonwebtoken");
const { models } = require("../models");
const userModel = models.User;

async function authMiddleware(req, res, next) {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ error: "인증되지 않음 - 토큰이 제공되지 않았습니다" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findByPk(decoded.userId);

    if (!user) {
      return res
        .status(401)
        .json({ error: "인증되지 않음 - 사용자를 찾을 수 없습니다" });
    }

    req.user = user; // req.user에 사용자 인스턴스를 할당
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ error: "인증되지 않음 - 토큰이 만료되었습니다" });
    } else if (error.name === "JsonWebTokenError") {
      return res
        .status(401)
        .json({ error: "인증되지 않음 - 잘못된 토큰입니다" });
    } else {
      return res.status(401).json({ error: "인증되지 않음 - 인증 실패" });
    }
  }
}

module.exports = authMiddleware;
