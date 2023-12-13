import { RivewsRepository } from "../repositories/reviews.repository.js";

export class ReviewsService {
  reviewsRepository = new RivewsRepository();

  findAllReviews = async () => {
    const reviews = await this.reviewsRepository.findAllReviews();
    console.log(reviews);
    reviews.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return reviews.map((comment) => {
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
    const updatedReview =
      await this.reviewsRepository.findCommentById(reviewId);

    return {
      userId: updatedReview.userId,
      reviewId: updatedReview.reviewId,
      rating: updatedReview.rating,
      reviewText: updatedReview.rating,
      createdAt: updatedReview.createdAt,
      updatedAt: updatedReview.updatedAt,
    };
  };
}
