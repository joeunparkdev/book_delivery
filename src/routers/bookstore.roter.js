import express from "express";
import { StoresController } from "../controllers/bookstore.controller.js";
import {
    authMiddleware,
    adminMiddleware,
} from "../middlewares/auth-middleware.js";

const storesController = new StoresController();

const router = express.Router();

// 업장 조회	/api/stores
router.get("/", storesController.getStores);
//내업장 조회
router.get("/me", authMiddleware, storesController.getMyStores);
// 업장 등록	/api/stores
router.post("/", authMiddleware, storesController.createStore);
// 업장 수정	/api/stores/:storeId
router.put("/:bookstoreId", authMiddleware, storesController.updateStore);
// 업장 상세 조회	/api/stores/:storeId
router.get("/:bookstoreId", storesController.getStoreById);
// 업장 삭제	/api/stores/:storeId
router.delete("/:bookstoreId", authMiddleware, storesController.deleteStore);


export default router;