const jwt = require("jsonwebtoken");
const { models } = require('../models');
const userModel = models.User;

async function authMiddleware(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(401).json({ error: "Unauthorized - No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findByPk(decoded.userId);
    if (!user) {
      return res.status(401).json({ error: "Unauthorized - User not found" });
    }

    req.user = user.toJSON(); // req.user에 사용자 정보를 할당
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized - Invalid token" });
  }
}

module.exports = authMiddleware;
