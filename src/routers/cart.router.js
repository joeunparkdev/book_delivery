import express from "express";
import { CartController } from "../controllers/cart.controller.js";
import {
  authMiddleware,
  adminMiddleware,
} from "../middlewares/auth-middleware.js";

const router = express.Router();

const cartController = new CartController();

// 장바구니 조회
router.get("/", authMiddleware, cartController.getCart);

router.post("/", authMiddleware, cartController.createCart);

// 장바구니의 물품 삭제
router.delete("/", authMiddleware, cartController.deleteCart);

// 상품 전체 삭제
router.delete("/all", authMiddleware, cartController.deleteAllCart);

// 장바구니의 물품 수정
router.put("/", authMiddleware, cartController.updateCart);

export default router;
