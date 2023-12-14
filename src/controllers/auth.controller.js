import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { UsersService } from "../services/users.service.js";
import { RefreshTokenService } from "../services/refreshTokenService.js";
import {
  JWT_ACCESS_TOKEN_SECRET,
  JWT_ACCESS_TOKEN_EXPIRES_IN,
  JWT_REFRESH_TOKEN_SECRET,
} from "../constants/security.constant.js";
import axios from "axios";
import ENUMS from "../constants/app.constants.js";

export class AuthController {
  authService = new UsersService();
  refreshTokenService = new RefreshTokenService();
  accessToken = "";
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  constructor() {
    this.accessToken = "";
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

  verify = async (req, res, next) => {
    const { email, verificationCode } = req.body;

    const verifyCode = await this.authService.checkVerificationCode(
      email,
      verificationCode,
    );
    //검증 코드 실패
    if (!verifyCode) {
      return res.status(500).json({
        success: false,
        message: "검증 코드가 일치하지않습니다.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "검증이 성공했습니다.",
    });
  };

  signUp = async (req, res, next) => {
    try {
      const { verificationCode, username, password, email } = req.body;

      const verifiedCode = await this.authService.checkVerificationCode(
        email,
        verificationCode,
      );

      if (!verifiedCode) {
        return res.status(500).json({
          success: false,
          message: "검증 코드가 일치하지 않습니다.",
        });
      }

      const userType = req.params.userType;

      if (!Object.values(ENUMS.USER_TYPE).includes(userType)) {
        throw new Error("잘못된 사용자 유형입니다");
      }

      const newUser = await this.authService.createUser(
        username,
        password,
        email,
        userType,
      );

      const accessToken = this.generateAccessToken(newUser.id);
      const refreshToken = await this.generateRefreshToken(newUser.id);

      this.setCookie(res, accessToken);

      return res.status(200).json({
        success: true,
        message: "사용자를 생성하였습니다. 이메일을 확인하여 인증하세요.",
        authId: newUser.id,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message:
          error.message ||
          "예상치 못한 에러가 발생했습니다. 관리자에게 문의하세요.",
      });
    }
  };

  sendCode = async (req, res, next) => {
    try {
      const { email } = req.body;

      // 이메일 중복 확인
      const emailExists = await this.authService.checkEmailExists(email);
      if (emailExists) {
        throw new Error("이미 등록된 이메일 주소입니다");
      }

      const verificationCode = this.generateVerificationCode();
      const createdCode = await this.authService.createCode(
        email,
        verificationCode,
      );
      const sentCode = await this.sendVerificationEmail(
        email,
        verificationCode,
      );

      //검증 코드 실패
      if (!verificationCode) {
        return res.status(500).json({
          success: false,
          message:
            error.message ||
            "검증 코드가 생성에 에러가 생겼습니다. 관리자에게 문의하세요.",
        });
      }
      if (!createdCode) {
        return res.status(500).json({
          success: false,
          message:
            error.message ||
            "검증 코드가 생성되지않았습니다. 관리자에게 문의하세요.",
        });
      }
      if (!sentCode) {
        return res.status(500).json({
          success: false,
          message:
            error.message ||
            "검증 코드가 발송되지않았습니다. 관리자에게 문의하세요.",
        });
      }
      return res.status(200).json({
        success: true,
        message: "검증코드를 생성하였습니다. 이메일을 확인하여 인증하세요.",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message:
          error.message ||
          "예상치 못한 에러가 발생했습니다. 관리자에게 문의하세요.",
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

  signOut = async (req, res, next) => {
    const userId = req.user.userId;
    try {
      const existingUser = await this.authService.findUserById(userId);
      // 클라이언트에서 액세스 토큰 제거
      this.accessToken = "";

      res.clearCookie("authorization");

      // 만료된 토큰 삭제
      const token = await this.refreshTokenService.deleteExpiredTokens(userId);

      // 로그아웃 성공 시 204 상태 코드 반환
      return res.status(204).end();
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "예상치 못한 에러가 발생했습니다. 관리자에게 문의하세요.",
      });
    }
  };

  checkEmailExists = async (req, res, next) => {
    try {
      const { email } = req.query;

      if (!email) {
        throw new Error("Email parameter is missing");
      }

      const emailExists = await this.authService.checkEmailExists(email);

      return res.status(200).json({
        success: true,
        message: "Email check successful",
        data: { emailExists },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Error checking email existence",
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

  // TODO: 카카오 토큰 검증을 위한 함수
  verifyKakaoToken = async (accessToken) => {
    try {
      const response = await axios.get(
        "https://kapi.kakao.com/v1/user/access_token_info",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Kakao token verification error:", error);
      throw new Error("Failed to verify Kakao token");
    }
  };

  kakaoLogin = async (req, res, next) => {
    try {
      // 카카오 로그인 확인
      const kakaoAccount = req.user;
      if (!kakaoAccount) {
        throw new Error("카카오 계정 정보를 찾을 수 없습니다.");
      }
      // 카카오 로그인 처리
      const userId = await this.authService.kakaoLogin(
        kakaoAccount.kakaoId,
        kakaoAccount.email,
        kakaoAccount.username,
      );
      // 새로운 액세스 토큰 및 리프레시 토큰 생성 및 설정
      const accessToken = this.generateAccessToken(+userId);
      const refreshToken = await this.generateRefreshToken(+userId);
      this.setCookie(res, accessToken);

      return res.status(200).json({
        success: true,
        message: "카카오 로그인 성공",
        data: { accessToken },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "카카오 연동 로그인 중 에러가 발생했습니다.",
      });
    }
  };

  // 6자리의 랜덤한 숫자로 이루어진 인증번호 생성 함수
  generateVerificationCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    return code;
  };

  // 이메일 전송 함수
  sendVerificationEmail = async (email, verificationCode) => {
    const mailOptions = {
      from: process.env.EMAIL_USER, // 발신자 이메일 주소
      to: email, // 수신자 이메일 주소
      subject: "이메일 인증",
      text: `회원가입을 완료하려면 다음 인증번호 6자리를 입력하세요: ${verificationCode}`,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log(`이메일이 성공적으로 전송되었습니다: ${info.messageId}`);
      return info;
    } catch (error) {
      console.error("이메일 전송 중 오류 발생:", error);
      return error;
    }
  };

  //보안 코드 검사
  checkVerificationCode = async (req, res, next) => {
    try {
      const { email, verificationCode } = req.body;
      const isVerified = await this.authService.checkVerificationCode(
        email,
        verificationCode,
      );
      if (!isVerified) {
        throw new Error("Verification code is invalid.");
      }
      next();
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        success: false,
        message: error.message || "Error verifying the verification code.",
      });
    }
  };

}

export default AuthController;
