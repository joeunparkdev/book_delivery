import express from "express";
import passport from "passport";
import { AuthController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = express.Router();
const authController = new AuthController();

router.post("/signup/:userType", authController.signUp);
router.post("/verify", authController.verify);
router.post("/sendCode", authController.sendCode);
router.get("/check-email", authController.checkEmailExists);
router.post("/signin", authController.signIn);
router.post("/signout", authMiddleware, authController.signOut);

router.get("/kakao", passport.authenticate("kakao", { session: false }));
try {
  router.get(
    "/kakao/callback",
    passport.authenticate("kakao", {
      session: false,
    }),
    authController.kakaoLogin,
  );
} catch (error) {
  console.log(error);
}

router.get("/kakao/:userType", passport.authenticate("kakao", { session: false }));
try {
  router.get(
    "/kakao/callback",
    passport.authenticate("kakao", {
      session: false,
    }),
    authController.kakaoLogin,
  );
} catch (error) {
  console.log(error);
}

export default router;
