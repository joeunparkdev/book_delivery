import { prisma } from "../utils/prisma/index.js";

export class RivewsRepository {
  findAllReviews = async () => {
    // ORM인 Prisma에서 Products 모델의 findMany 메서드를 사용해 데이터를 요청합니다.
    const reviews = await prisma.reviews.findMany();
    console.log(reviews);
    return reviews;
  };

  findReviewById = async (reviewId) => {
    const review = await prisma.reviews.findUnique({
      where: { reviewId: +reviewId },
    });

    return review;
  };

  createReviews = async (
    userId,
    productId,
    rating,
    reviewText,
    createdAt,
    updatedAt,
  ) => {
    const createComments = await prisma.reviews.create({
      data: {
        userId: userId,
        productId: productId,
        rating: rating,
        reviewText: reviewText,
        createdAt: createdAt,
        updatedAt: updatedAt,
      },
    });
    return createComments;
  };
  updateReview = async (userId, reviewId, rating, reviewText) => {
    const updatedReview = await prisma.reviews.update({
      where: {
        userId: +userId,
        reviewId: +reviewId,
      },
      data: {
        rating,
        reviewText,
      },
    });
    return updatedReview;
  };
}
