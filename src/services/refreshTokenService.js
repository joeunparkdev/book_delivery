import jwt from "jsonwebtoken";
import {
  JWT_REFRESH_TOKEN_SECRET,
  JWT_ACCESS_TOKEN_SECRET,
  JWT_ACCESS_TOKEN_EXPIRES_IN,
} from "../constants/security.constant.js";
import { RefreshTokenRepository } from "../repositories/refreshTokenRepository.js";
import { DateTime } from 'luxon';
import { prisma } from "../utils/prisma/index.js";

// Prisma를 사용하여 데이터베이스의 리프레시 토큰을 관리하는 서비스
const refreshTokenRepository = new RefreshTokenRepository(prisma);

export class RefreshTokenService {
  // 액세스 토큰을 갱신하거나 새로 발급하는 함수
  async refreshAccessToken(user) {
    ("user.userId="+user.userId);
    // 사용자의 아이디를 기반으로 데이터베이스에서 리프레시 토큰을 조회
    const refreshToken = await refreshTokenRepository.findTokenByUserId(
      user.userId,
    );
    ("refreshToken=" + refreshToken);

    // 만약 리프레시 토큰이 존재하고 유효하다면
    if (refreshToken && refreshToken.token) {
      // 새로운 액세스 토큰 생성
      const newAccessToken = this.generateAccessToken(user.userId);
      ("newAccessToken" + newAccessToken);
      // 기존의 리프레시 토큰 삭제
      await refreshTokenRepository.deleteToken(user.userId);

      // 새로운 액세스 토큰 반환
      return newAccessToken;
    } else {
      // 리프레시 토큰이 없거나 유효하지 않은 경우
      // 새로운 리프레시 토큰 생성
      const newRefreshToken = this.generateRefreshToken(user.userId);

      // 기존의 리프레시 토큰 삭제
      await refreshTokenRepository.deleteToken(user.userId);

      // 새로운 리프레시 토큰의 만료 날짜 설정 (7일 후)
      const expirationDate = this.calculateExpirationDate();

      // 데이터베이스에 새로운 리프레시 토큰 추가
      await refreshTokenRepository.createToken(
        user.userId,
        newRefreshToken,
        expirationDate,
      );

      // null을 반환하여 클라이언트에게 새로운 액세스 토큰이 없음을 알림
      return null;
    }
  }

  // 액세스 토큰을 생성하는 함수
  generateAccessToken(userId) {
    ("generateAccessToken" + userId);
    const accessTokenSecret =
      JWT_ACCESS_TOKEN_SECRET || "default_access_token_secret";
    const accessTokenExpiresIn = JWT_ACCESS_TOKEN_EXPIRES_IN || "1h";

    const accessToken = jwt.sign({ userId: userId }, accessTokenSecret, {
      expiresIn: accessTokenExpiresIn,
    });

    return accessToken;
  }

  // 리프레시 토큰을 생성하는 함수
  generateRefreshToken(userId) {
    ("generateRefreshToken UserId=" + userId);
    const refreshTokenSecret =
      JWT_REFRESH_TOKEN_SECRET || "default_refresh_token_secret";
    const refreshTokenExpiresIn = "1d";

    const refreshToken = jwt.sign({ userId: userId }, refreshTokenSecret, {
      expiresIn: refreshTokenExpiresIn,
    });
    ("generateRefreshToken refreshToken=" + refreshToken);
    return refreshToken;
  }

  // 리프레시 토큰의 만료 날짜를 계산하는 함수 (7일 후)
  calculateExpirationDate() {
    const expirationDate = DateTime.now().plus({ days: 7 });
    return expirationDate;
  }

  // 유효기간이 지난 리프레시 토큰을 삭제하는 함수
  async deleteExpiredTokens(userId) {
    ("deleteExpiredTokens" + userId);
    await refreshTokenRepository.deleteExpiredTokens(userId);
  }

  // 특정 사용자의 모든 리프레시 토큰을 삭제하는 함수
  async deleteTokens(userId) {
    await refreshTokenRepository.deleteTokens(userId);
  }
}
