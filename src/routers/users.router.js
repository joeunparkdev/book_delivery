import express from "express";
import UsersController from "../controllers/users.controller.js";
import { authMiddleware, adminMiddleware } from "../middlewares/auth-middleware.js";

const router = express.Router();
const usersController = new UsersController();

//TODO: 팔로우, 언팔로우, 메세지 보내기도 디비에 관련있는건가? 아님 그냥 소켓 쓰는건가?

//모든 사용자 조회 API
router.get("/", authMiddleware, usersController.getUsers);

//관리자 모드 - 관리자 권한 부여
router.post('/grant-admin/:userId', authMiddleware, adminMiddleware, usersController.grantAdmin);

//관리자 모드 - 모든 사용자 삭제 API
router.delete("/", authMiddleware, adminMiddleware, usersController.deleteAllUsers);

// 내 정보 조회 API
router.get("/me", authMiddleware, usersController.getMyInfo);

// 내 정보 수정 API
router.put("/me", authMiddleware, usersController.modifyMyInfo);

// 내 정보 삭제 API
router.delete("/me", authMiddleware, usersController.deleteMyInfo);

export default router;
