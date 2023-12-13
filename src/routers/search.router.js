import express from "express";
import { SearchController } from "../controllers/search.controller.js";
import {
    authMiddleware,
    adminMiddleware,
} from "../middlewares/auth-middleware.js";


const router = express.Router();
const searchController = new SearchController();


router.get("/", searchController.findProductsByName);

export default router;