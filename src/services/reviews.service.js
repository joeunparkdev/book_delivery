import { RivewsRepository } from "../repositories/reviews.repository.js";

export class ReviewsService {
  reviewsRepository = new RivewsRepository();

  findReviews = async (productId) => {
    const reviews = await this.reviewsRepository.findAllReviews(productId);
    console.log(reviews);
    reviews.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return reviews.map((reviews) => {
      return {
        reviewId: reviews.reviewId,
        userId: reviews.userId,
        bookstoreId: reviews.bookstoreId,
        reviewText: reviews.reviewText,
        rating: reviews.rating,
        createdAt: reviews.createdAt,
        updatedAt: reviews.updatedAt,
      };
    });
  };

  findReviewById = async (reviewId) => {
    const review = await this.reviewsRepository.findReviewById(reviewId);

    return {
      reviewId: review.reviewId,
      userId: review.userId,
      bookstoreId: review.bookstoreId,
      reviewText: review.reviewText,
      rating: review.rating,
      createdAt: review.createdAt,
      updatedAt: review.updatedAt,
    };
  };

  createReviews = async (userId, productId, rating, reviewText) => {
    const createReviews = await this.reviewsRepository.createReviews(
      +userId,
      +productId,
      rating,
      reviewText,
    );

    return {
      rating: createReviews.rating,
      userId: createReviews.userId,
      productId: createReviews.productId,
      reviewText: createReviews.reviewText,
      createdAt: createReviews.createdAt,
      updateAt: createReviews.updatedAt,
    };
  };
  updateReview = async (userId, reviewId, rating, reviewText) => {
    await this.reviewsRepository.updateReview(
      userId,
      reviewId,
      rating,
      reviewText,
    );
    const updatedReview = await this.reviewsRepository.findReviewById(reviewId);

    return {
      userId: updatedReview.userId,
      reviewId: updatedReview.reviewId,
      rating: updatedReview.rating,
      reviewText: updatedReview.reviewText,
      createdAt: updatedReview.createdAt,
      updatedAt: updatedReview.updatedAt,
    };
  };
  deleteReview = async (reviewId, userId) => {
    const review = await this.reviewsRepository.findReviewById(reviewId);
    if (!review) throw new Error("존재하지 않는 review입니다.");

    if (review.userId !== userId) {
      return res.status(401).json({ message: "reivew 삭제 권한이 없습니다." });
    }
    await this.reviewsRepository.deleteReview(reviewId);

    return {
      userId: review.userId,
      reviewId: review.reviewId,
      rating: review.rating,
      reviewText: review.reviewText,
      createdAt: review.createdAt,
      updatedAt: review.updatedAt,
    };
  };
}
