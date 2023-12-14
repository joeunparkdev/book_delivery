import express from "express";
import { SearchController } from "../controllers/search.controller.js";

import {
    authMiddleware,
    adminMiddleware,
} from "../middlewares/auth-middleware.js";


const router = express.Router();
const searchController = new SearchController();

router.get("/products", searchController.findProducts);
router.get("/products/name", searchController.findProductsByName);
router.get("/products/author", searchController.findProductsByAuthor);
router.get("/products/price", searchController.findProductsByMaxPrice);
router.get("/products/status", searchController.findProductsByStatus);
router.get("/products/keyword::keyword", searchController.findProductByKeyword);


router.get("/bookstores", searchController.findStores);
router.get("/bookstores/status", searchController.findStoreByStatus);
router.get("/bookstores/address", searchController.findStoresByAddress);
router.get("/bookstores/name", searchController.findStoresByName)
router.get("/bookstores/keyword/:keyword", searchController.findStoreByKeyword);

export default router;