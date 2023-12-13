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
import axios from 'axios';
import ENUMS from "../constants/app.constants.js";

export class AuthController {
  authService = new UsersService();
  refreshTokenService = new RefreshTokenService();
  accessToken = "";
  transporter = nodemailer.createTransport({
    service: 'gmail',
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
        throw new Error("비밀번호가 일치하지 않습니다");
      }
  
      const userType = req.params.userType;
  
      if (!Object.values(ENUMS.USER_TYPE).includes(userType)) {
        throw new Error("잘못된 사용자 유형입니다");
      }
  
     const verificationCode = this.generateVerificationCode();
      
      // 이메일 중복 확인
      const emailExists = await this.authService.checkEmailExists(email);
      if (emailExists) {
        throw new Error("이미 등록된 이메일 주소입니다");
      }
  
      // 보안 코드 확인
      //await this.verifyEmail(email, verificationCode);
  
      // 중복되지 않은 경우 회원가입 진행
      const newUser = await this.authService.createUser(
        username,
        password,
        email,
        userType,
        verificationCode
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
        message: error.message || "예상치 못한 에러가 발생했습니다. 관리자에게 문의하세요.",
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
      const response = await axios.get('https://kapi.kakao.com/v1/user/access_token_info', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Kakao token verification error:', error);
      throw new Error('Failed to verify Kakao token');
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
        kakaoAccount.username
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
        message: '카카오 연동 로그인 중 에러가 발생했습니다.',
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
    subject: '이메일 인증',
    text: `안녕하세요! 계정을 활성화하려면 다음 링크를 클릭하세요: http://localhost:3001/verifyEmail/${token}\n감사합니다!`,
  };

  try {
    const info = await this.transporter.sendMail(mailOptions);
    console.log(`이메일이 성공적으로 전송되었습니다: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error('이메일 전송 중 오류 발생:', error);
    return error;
  }
};

//보안 코드 검사
checkVerificationCode = async (req, res, next) => {
  try {
    const { email, verificationCode } = req.body; 
    console.log(email, verificationCode)
    await this.authService.checkVerificationCode(email, verificationCode, req, res, next);
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      success: false,
      message: error.message || "보안 코드 확인 중 에러가 발생했습니다.",
    });
  }
};

verifyEmail = async (req, res, next) => {
  try {
    const { email, verificationCode } = req.body;

    // 실제로는 DB에서 사용자를 확인하고, 이메일 인증을 진행합니다.
    const isVerified = verifyUser(email, verificationCode);

    if (isVerified) {
      // 사용자 정보 대신 더 안전한 방법으로 실제 인증을 수행해야 합니다.
      const user = {
        email: req.body.email,
      };

      // 클라이언트에게 토큰 발급
      const token = jwt.sign(user, "your_secret_key");

      return res.status(200).json({
        success: true,
        message: "이메일 인증이 성공하였고, 토큰이 생성되었습니다.",
        token: token,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "이메일 인증에 실패했습니다.",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "에러가 발생했습니다.",
    });
  }
};

verifyUser(email, verificationCode) {
  return true;
}

}

export default AuthController;
