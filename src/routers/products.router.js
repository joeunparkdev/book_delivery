import express from "express";

import ProductsController from "../controllers/products.controller.js";
import {
  authMiddleware,
  adminMiddleware,
} from "../middlewares/auth-middleware.js";
import s3Middleware from "../middlewares/s3-middleware.js";

const productsController = new ProductsController();

const router = express.Router();

//이미지 업로드 라우터
router.post("/upload", s3Middleware, productsController.uploadImage);

//TODO: 상품 추천해요, 비추천해요, 평점주기
// 상품 생성 API
router.post(
  "/",
  authMiddleware,
  s3Middleware,
  productsController.createProduct,
);

// 상품 수정 API
router.put(
  "/:productId",
  authMiddleware,
  s3Middleware,
  productsController.updateProduct,
);

// 상품 삭제 API
router.delete("/:productId", authMiddleware, productsController.deleteProduct);

// 관리자모드 - 모든 상품 삭제 API
router.delete(
  "/",
  authMiddleware,
  adminMiddleware,
  productsController.deleteAllProducts,
);

// 상품 목록 조회 API
router.get("/", productsController.getProducts);

// 상품 상세 조회 API
router.get("/:productId", productsController.getProductsById);

export default router;
