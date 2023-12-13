import express from "express";
import { SearchController } from "../controllers/search.controller.js";

import {
    authMiddleware,
    adminMiddleware,
} from "../middlewares/auth-middleware.js";


const router = express.Router();
const searchController = new SearchController();


router.get("/name", searchController.findProductsByName);
router.get("/author", searchController.findProductsByAuthor);
router.get("/price", searchController.findProductsByMaxPrice);
router.get("/status", searchController.findProductsByStatus);
router.get("/products/:keyword", searchController.findProductByKeyword);

router.get("/bookstores/keyword/:keyword", searchController.findStoreByKeyword);
router.get("/bookstores/status", searchController.findStoreByStatus);
router.get("/bookstores/address", searchController.findStoresByAddress);
router.get("/bookstores/name", searchController.findStoresByName)

export default router;