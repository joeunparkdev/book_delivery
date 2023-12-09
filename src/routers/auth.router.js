import express from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = express.Router();
const authController = new AuthController();

router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);
router.post("/signout", authMiddleware, authController.signOut);

export default router;
