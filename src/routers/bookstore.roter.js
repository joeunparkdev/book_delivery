import express from "express";
import { StoresController } from "../controllers/bookstore.controller.js";
import {
  authMiddleware,
  adminMiddleware,
} from "../middlewares/auth-middleware.js";
import s3MiddleWare from "../middlewares/s3-middleware.js";

const storesController = new StoresController();

const router = express.Router();

// 업장 조회	/api/stores
router.get("/", storesController.getStores);
//내업장 조회
router.get("/me", authMiddleware, storesController.getMyStores);
// 업장 등록	/api/stores
router.post("/", authMiddleware, s3MiddleWare, storesController.createStore);
// 업장 수정	/api/stores/:storeId
router.put(
  "/:bookstoreId",
  authMiddleware,
  s3MiddleWare,
  storesController.updateStore,
);
// 업장 상세 조회	/api/stores/:storeId
router.get("/:bookstoreId", storesController.getStoreById);

// 업장 삭제	/api/stores/:storeId
router.delete("/:bookstoreId", authMiddleware, storesController.deleteStore);

//관리자 모드 업장 조회
router.get("/admin/bookstores", adminMiddleware, storesController.getStores);

//관리자 모드 업장 등록	/api/stores
router.post(
  "/admin/bookstores",
  authMiddleware,
  s3MiddleWare,
  adminMiddleware,
  storesController.createStore,
);

//관리자 모드 업장 수정	/api/stores/:storeId
router.put(
  "admin/:bookstoreId",
  authMiddleware,
  s3MiddleWare,
  storesController.updateStore,
);

//관리자 모드 업장 상세 조회	/api/stores/:storeId
router.get(
  "/admin/:bookstoreId",
  adminMiddleware,
  storesController.getStoreById,
);

//관리자 모드 업장 삭제	/api/stores/:storeId
router.delete(
  "/admin/:bookstoreId",
  authMiddleware,
  adminMiddleware,
  storesController.deleteStore,
);

export default router;
