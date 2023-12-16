import express from "express";
import { StoresController } from "../controllers/bookstore.controller.js";
import {
  authMiddleware,
  adminMiddleware,
} from "../middlewares/auth-middleware.js";
import { s3Middleware } from "../middlewares/s3-middleware.js";

const storesController = new StoresController();

const router = express.Router();

// 업장 조회	/api/stores
router.get("/", storesController.getStores);
//내업장 조회
router.get("/me", authMiddleware, storesController.getMyStores);
// 업장 등록	/api/stores
router.post(
  "/",
  authMiddleware,
  s3Middleware.single("image"),
  storesController.createStore,
);

// 이미지 등록	/api/stores/image
router.post(
  "/image",
  authMiddleware,
  s3Middleware.single("image"),
  storesController.createImage,
);
// 이미지 없이 등록	/api/stores
router.post("/noImaage", authMiddleware, storesController.createWithoutImage);

// 업장 수정	/api/stores/:storeId
router.put(
  "/:bookstoreId",
  authMiddleware,
  s3Middleware.single("image"),
  storesController.updateStore,
);
// 업장 상세 조회	/api/stores/:storeId
router.get("/:bookstoreId", storesController.getStoreById);

// 업장 삭제	/api/stores/:storeId
router.delete("/:bookstoreId", authMiddleware, storesController.deleteStore);

//관리자 모드 업장 조회
router.get("/admin/bookstores", adminMiddleware, storesController.getStores);

//TODO 관리자 모드 업장 등록	/api/stores
router.post(
  "/admin/bookstores",
  authMiddleware,
  s3Middleware.single("image"),
  adminMiddleware,
  storesController.createStore,
);

//TODO 관리자 모드 업장 수정	/api/stores/:storeId
router.put(
  "admin/:bookstoreId",
  authMiddleware,
  s3Middleware.single("image"),
  storesController.updateStore,
);

//TODO 관리자 모드 업장 상세 조회	/api/stores/:storeId
router.get(
  "/admin/:bookstoreId",
  adminMiddleware,
  storesController.getStoreById,
);

//관리자 모드 업장 삭제	/api/stores/:storeId
router.delete(
  "/",
  authMiddleware,
  adminMiddleware,
  storesController.deleteStore,
);

export default router;
