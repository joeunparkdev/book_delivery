import { ReviewsService } from "../services/reviews.service.js";
import { ProductsRepository } from "../repositories/products.repository.js";
export class ReviewsController {
  reviewsService = new ReviewsService();
  productsRepository = new ProductsRepository();

  // review 전체 조회
  getReviews = async (req, res, next) => {
    try {
      const { productId } = req.params;
      const existProduct =
        await this.productsRepository.findProductById(productId);
      if (!existProduct) {
        return res
          .status(404)
          .json({ message: "해당하는 책이 존재하지 않습니다." });
      }
      const reviews = await this.reviewsService.findAllReviews();

      return res
        .status(200)
        .json({ message: "reivew가 조회되었습니다.", data: reviews });
    } catch (err) {
      next(err);
    }
  };

  // review 생성
  createReviews = async (req, res, next) => {
    try {
      if (!req.user || !req.user.userId) {
        return res.status(401).json({ error: "User not logged in" });
      }

      const { productId } = req.params;
      const { reviewText, rating } = req.body;

      const existProduct =
        await this.productsRepository.findProductById(productId);

      if (!existProduct) {
        res.status(404).json({ message: "해당하는 책이 존재하지 않습니다." });
      }
      const userId = req.user.userId;

      const newComment = await this.reviewsService.createReviews(
        userId,
        productId,
        rating,
        reviewText,
        new Date(),
        new Date(),
      );

      res.json({
        message: "reivew가 작성되었습니다.",
        data: newComment,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
  updateReview = async (req, res, next) => {
    try {
      const { reviewId } = req.params;
      const { rating, reviewText } = req.body;
      const existComment = await this.reviewsService.findReviewById(reviewId);
      if (!existComment) {
        return res.status(404).json({ message: "해당 review가 없습니다." });
      }
      const userId = req.user.userId;
      if (existComment.userId !== userId) {
        return res
          .status(401)
          .json({ message: "review 수정 권한이 없습니다." });
      }
      const updatedReivew = await this.reviewsService.updateReview(
        userId,
        reviewId,
        rating,
        reviewText,
      );
      res
        .status(201)
        .json({ message: "review가 수정되었습니다.", data: updatedReivew });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
}

export default ReviewsController;