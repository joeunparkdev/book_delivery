import express from "express";
import ReviewsController from "../controllers/reviews.controller.js";
import {
  authMiddleware,
  adminMiddleware,
} from "../middlewares/auth-middleware.js";
const reviewsController = new ReviewsController();
const router = express.Router();

router.get("/:productId", reviewsController.getReviews);

router.post("/:productId", authMiddleware, reviewsController.createReviews);

router.put("/:reviewId", authMiddleware, reviewsController.updateReview);

export default router;
