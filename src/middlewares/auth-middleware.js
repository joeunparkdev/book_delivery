import jwt from "jsonwebtoken";
import { JWT_ACCESS_TOKEN_SECRET } from "../constants/security.constant.js";
import { RefreshTokenService } from "../services/refreshTokenService.js";
import { prisma } from '../utils/prisma/index.js';

const refreshTokenManagementService = new RefreshTokenService();

const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.cookies;

    if (!authorization) {
      throw new Error("토큰이 존재하지 않습니다.");
    }

    const [tokenType, accessToken] = authorization.split(" ");

    if (tokenType !== "Bearer") {
      throw new Error("토큰 타입이 일치하지 않습니다.");
    }

    const decodedPayload = jwt.verify(accessToken, JWT_ACCESS_TOKEN_SECRET);

    const { userId } = decodedPayload;

    // 데이터베이스에서 사용자 정보 가져오기
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      res.clearCookie("authorization");
      throw new Error("토큰 사용자가 존재하지 않습니다.");
    }

    req.user = user;

    const newAccessToken = await refreshTokenManagementService.refreshAccessToken(user);

    if (newAccessToken) {
      // 새로운 액세스 토큰이 발급된 경우
      const expires = new Date();
      expires.setHours(expires.getHours() + 12);

      res.cookie("authorization", `Bearer ${newAccessToken}`, {
        expires: expires,
      });
    }

    return next();
  } catch (error) {
    res.clearCookie("authorization");

    switch (error.name) {
      case "TokenExpiredError":
        return res.status(401).json({ message: "토큰이 만료되었습니다." });
      case "JsonWebTokenError":
        return res.status(401).json({ message: "토큰이 조작되었습니다." });
      default:
        return res.status(401).json({ message: error.message || "비정상적인 요청입니다." });
    }
  }
};

const adminMiddleware = async (req, res, next) => {
  if (!(req.user && req.user.isAdmin === true)) {
    return res.status(403).json({
      success: false,
      message: "접근 권한이 없습니다.",
    });
  }
  // 권한이 있으면 다음 미들웨어로 이동
  next();
};

export { authMiddleware, adminMiddleware }; 
