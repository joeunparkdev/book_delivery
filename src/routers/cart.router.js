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

router.put("/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const findProduct = await Products.findByPk(id);

    if (findProduct) {
      await findProduct.update({ quantity });
      return res.json({
        success: true,
        message: "상품 정보를 수정하였습니다",
      });
    } else {
      return res
        .status(400)
        .json({ success: false, errorMessage: "상품을 찾을 수 없습니다" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "상품 수정 실패했습니다", error });
  }
});

module.exports = router;
