import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UsersService } from "../services/users.service.js";
import { RefreshTokenService } from "../services/refreshTokenService.js";
import {
  JWT_ACCESS_TOKEN_SECRET,
  JWT_ACCESS_TOKEN_EXPIRES_IN,
  JWT_REFRESH_TOKEN_SECRET,
} from "../constants/security.constant.js";

export class AuthController {
  authService = new UsersService();
  refreshTokenService = new RefreshTokenService();
  accessToken = ''; 
  
  constructor() {
    this.accessToken = ''; 
  }
  
  generateAccessToken = (userId) => {
    return jwt.sign({ userId }, JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: JWT_ACCESS_TOKEN_EXPIRES_IN,
    });
  };

  generateRefreshToken = async (userId) => {
    return await this.refreshTokenService.generateRefreshToken(userId);
  };

  refreshAccessToken = async (req, res, next) => {
    try {
      const refreshToken = req.cookies.refreshToken;

      if (!refreshToken) {
        throw new Error("No refresh token provided");
      }

      const decodedPayload = jwt.verify(refreshToken, JWT_REFRESH_TOKEN_SECRET);
      const newAccessToken = this.generateAccessToken(decodedPayload.userId);

      this.setCookie(res, newAccessToken);

      return res.status(200).json({
        success: true,
        message: "액세스 토큰을 갱신했습니다.",
        data: { accessToken: newAccessToken },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "액세스 토큰을 갱신하는 중 에러가 발생했습니다.",
      });
    }
  };

  signIn = async (req, res, next) => {
    try {
      const { password, email } = req.body;
  
      // 사용자 로그인 시도
      const user = await this.authService.signInUser(email, password);

      // 인증에 성공한 경우
      const accessToken = this.generateAccessToken(user.userId);
      const refreshToken = await this.generateRefreshToken(user.userId);
  
      this.setCookie(res, accessToken);
  
      return res.status(200).json({
        success: true,
        message: "로그인에 성공했습니다.",
        data: { accessToken },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "예상치 못한 에러가 발생했습니다. 관리자에게 문의하세요.",
      });
    }
  };

  signUp = async (req, res, next) => {
    try {
        const { username, password, confirmPassword, email } = req.body;

        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }

        const newUser = await this.authService.createUser(
          username,
          password,
          email
        );        

        const accessToken = this.generateAccessToken(newUser.id);
        const refreshToken = await this.generateRefreshToken(newUser.id);

        this.setCookie(res, accessToken);

        return res.status(200).json({
            success: true,
            message: "사용자를 생성하였습니다.",
            authId: newUser.id,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "예상치 못한 에러가 발생했습니다. 관리자에게 문의하세요.",
        });
    }
};

signOut = async (req, res, next) => {
  const userId = req.user.userId;
  try {
    const existingUser = await this.authService.findUserById(userId);
    // 클라이언트에서 액세스 토큰 제거
    this.accessToken = '';

    res.clearCookie('authorization');


    // 만료된 토큰 삭제
    const token = await this.refreshTokenService.deleteExpiredTokens(userId);

    // 로그아웃 성공 시 204 상태 코드 반환
    return res.status(204).end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: '예상치 못한 에러가 발생했습니다. 관리자에게 문의하세요.',
    });
  }
};

  setCookie = (res, accessToken) => {
    const expires = new Date();
    expires.setHours(expires.getHours() + 12);
    res.cookie("authorization", `Bearer ${accessToken}`, {
      expires: expires,
    });
  };

  clearCookie = (res) => {
    res.clearCookie("authorization");
  };
}

export default AuthController;