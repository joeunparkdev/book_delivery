function addReview() {
  const productIdInput = document.getElementById("productIdInput");
  const ratingSelect = document.getElementById("starRating");
  const reviewTextInput = document.querySelector(".review-wr textarea");

  if (productIdInput && ratingSelect && reviewTextInput) {
    const productId = productIdInput.value;
    const rating = parseInt(ratingSelect.value);
    const reviewText = reviewTextInput.value;

    submitReview(productId, rating, reviewText);
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  const starRatingSelect = document.getElementById("starRating");

  function updateStarRating() {
    const selectedRating = parseInt(starRatingSelect.value, 10);
    const starRatingContainer = document.getElementById("starRatingContainer");
    if (starRatingContainer) {
      starRatingContainer.innerHTML = "★".repeat(selectedRating);
    }
  }

  updateStarRating();

  if (starRatingSelect) {
    starRatingSelect.addEventListener("input", updateStarRating);
  }

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const productDetails = await fetchProductDetails(productId);
    const reviews = await displayReviews(productId);

    const productDetailElement = document.getElementById("productDetail");

    if (!productDetailElement.innerHTML.trim()) {
      displayProductDetails(productDetails);
    }
    console.log(productId);
    displayReviews(productId);
    updateStarRating();
  } catch (error) {
    console.error("에러 ---", error);
  }

  // Add event listener to the addReviewBtn
  const addReviewBtn = document.getElementById("addReviewBtn");
  if (addReviewBtn) {
    addReviewBtn.addEventListener("click", addReview);
  }
});

async function submitReview(productId, rating, reviewText) {
  try {
    const url = `/api/review/${productId}`;
    const requestBody = {
      rating: rating,
      reviewText: reviewText,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`리뷰 제출 실패. HTTP 오류! 상태: ${response.status}`);
    }

    const data = await response.json();
    console.log("리뷰가 성공적으로 제출되었습니다:", data);
  } catch (error) {
    console.error("리뷰 제출 중 에러 발생:", error.message);
  }
}

function displayProductDetails(product) {
  const productDetailElement = document.getElementById("productDetail");
  displayReviews(product.reviews);

  const imageElement = document.createElement("img");
  imageElement.src = product.imageUrl;
  imageElement.alt = product.name;
  productDetailElement.appendChild(imageElement);

  const titleElement = document.createElement("h2");
  titleElement.textContent = product.name;
  productDetailElement.appendChild(titleElement);

  const authorElement = document.createElement("div");
  authorElement.textContent = `작가: ${product.author}`;
  productDetailElement.appendChild(authorElement);

  const descriptionElement = document.createElement("div");
  descriptionElement.textContent = `설명: ${product.description}`;
  productDetailElement.appendChild(descriptionElement);
}

async function displayReviews(productId) {
  try {
    const response = await fetch(`/api/review/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }
    const reviews = await response.json();

    const reviewListElement = document.getElementById("reviewList");
    reviewListElement.innerHTML = "";

    if (reviews && reviews.length > 0) {
      for (const review of reviews) {
        const reviewElement = document.createElement("div");
        reviewElement.className = "review";

        const reviewerElement = document.createElement("div");
        reviewerElement.textContent = `리뷰어: ${review.reviewer}`;
        reviewElement.appendChild(reviewerElement);

        const contentElement = document.createElement("div");
        contentElement.textContent = `리뷰 내용: ${review.content}`;
        reviewElement.appendChild(contentElement);

        const ratingElement = document.createElement("div");
        ratingElement.textContent = "평점: ";
        for (let i = 0; i < review.rating; i++) {
          const starElement = document.createElement("span");
          starElement.textContent = "★";
          ratingElement.appendChild(starElement);
        }
        reviewElement.appendChild(ratingElement);

        reviewListElement.appendChild(reviewElement);
      }
    } else {
      const noReviewsElement = document.createElement("p");
      noReviewsElement.textContent = "리뷰가 없습니다.";
      reviewListElement.appendChild(noReviewsElement);
    }
  } catch (error) {
    console.error("리뷰 가져오기 중 에러 발생:", error.message);
  }
}

async function fetchProductDetails(productId) {
  console.log(productId);
  try {
    const response = await fetch(`/api/products/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("에러 ---", error);
    throw error;
  }
}

window.onload = async function () {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const userId = urlParams.get("id");
    const productDetails = await fetchProductDetails(productId);
    const getUser = await fetchProductDetails(userId);
    displayProductDetails(productDetails);
    displayReviews(productDetails.reviews);
    getUserId(getUser);
  } catch (error) {
    console.error("에러 ---", error);
  }
};

document.addEventListener("DOMContentLoaded", getUserId);
