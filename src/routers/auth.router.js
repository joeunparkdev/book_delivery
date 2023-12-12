import express from "express";
import { AuthController } from "../controllers/auth.controller.js";
import UsersController from "../controllers/users.controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import { configurePassport } from "../passport/index.js";

const router = express.Router();
const authController = new AuthController();
const configuredPassport = configurePassport();

router.post("/signup/:userType", authController.signUp);
router.get("/check-email", authController.checkEmailExists);
router.post("/signin", authController.signIn);
router.post("/signout", authMiddleware, authController.signOut);

router.get("/kakao", configuredPassport.authenticate("kakao", { session: false }));
router.get("/kakao/callback", configuredPassport.authenticate("kakao", {
    session: false,
}), authController.kakaoLogin);

export default router;
