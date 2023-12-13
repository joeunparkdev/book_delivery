import { AuthController } from "../controllers/auth.controller.js";
import { RefreshTokenService } from "../services/refreshTokenService.js";
import jwt from "jsonwebtoken";
import { JWT_ACCESS_TOKEN_SECRET } from "../constants/security.constant.js";
import { prisma } from "../utils/prisma/index.js";

const refreshTokenManagementService = new RefreshTokenService();
const authController = new AuthController();

// 보안 코드 확인 미들웨어
const checkVerificationCodeMiddleware = async (req, res, next) => {
  try {
    // req.body에서 email과 verificationCode를 가져오기
    const { email, verificationCode } = req.body; 
    console.log(email, verificationCode);
    
    // checkVerificationCode 함수 호출 시에는 이미 req.body에서 값을 가져옴
    await authController.checkVerificationCode(req, res, next);
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: error.message || "보안 코드 확인 중 에러가 발생했습니다.",
    });
  }
};



// 인증 미들웨어
const authMiddleware = async (req, res, next) => {
  try {
    // 'authorization'이라는 이름의 쿠키가 있는지 확인
    const authorization = req.cookies.authorization;
    if (!authorization) {
      // 토큰이 없을 경우 401 Unauthorized 반환
      return res.status(401).json({ message: "토큰이 존재하지 않습니다." });
    }

    // 토큰 분해
    const [tokenType, accessToken] = authorization.split(" ");

    if (tokenType !== "Bearer") {
      // 토큰 타입이 일치하지 않을 경우 401 Unauthorized 반환
      return res
        .status(401)
        .json({ message: "토큰 타입이 일치하지 않습니다." });
    }

    // 로그아웃 요청에서 액세스 토큰을 사용하므로 클라이언트에게 액세스 토큰을 전달
    req.accessToken = accessToken;

    // 액세스 토큰의 유효성 검사
    const decodedPayload = jwt.verify(accessToken, JWT_ACCESS_TOKEN_SECRET);
    const userId = +decodedPayload.userId;
    
    // 데이터베이스에서 사용자 정보 가져오기
    const user = await prisma.users.findUnique({
      where: { userId },
    });

    if (!user) {
      // 사용자가 존재하지 않을 경우 401 Unauthorized 반환
      res.clearCookie("authorization");
      return res
        .status(401)
        .json({ message: "토큰 사용자가 존재하지 않습니다." });
    }

    // req.user 속성에 사용자 정보 추가
    req.user = user;

    // 리프레시 토큰 관리 서비스를 사용하여 액세스 토큰 갱신
    const newAccessToken =
      await refreshTokenManagementService.refreshAccessToken(user);

    if (newAccessToken) {
      // 새로운 액세스 토큰이 발급된 경우
      const expires = new Date();
      expires.setHours(expires.getHours() + 12);

      // 응답 헤더에 액세스 토큰을 쿠키로 설정
      res.cookie("authorization", `Bearer ${newAccessToken}`, {
        expires: expires,
      });
    }

    // 다음 미들웨어로 이동
    return next();
  } catch (error) {
    // 에러가 발생한 경우 처리
    res.clearCookie("authorization");
    console.error("Auth Middleware Error:", error);

    switch (error.name) {
      case "TokenExpiredError":
        return res.status(401).json({ message: "토큰이 만료되었습니다." });
      case "JsonWebTokenError":
        return res.status(401).json({ message: "토큰이 조작되었습니다." });
      default:
        return res
          .status(401)
          .json({ message: error.message || "비정상적인 요청입니다." });
    }
  }
};

// 관리자 권한 미들웨어
const adminMiddleware = (req, res, next) => {
  if (!(req.user && req.user.isAdmin === true)) {
    // 관리자가 아닐 경우 403 Forbidden 반환
    return res.status(403).json({
      success: false,
      message: "접근 권한이 없습니다.",
    });
  }
  // 권한이 있으면 다음 미들웨어로 이동
  next();
};

export { checkVerificationCodeMiddleware, authMiddleware, adminMiddleware };
