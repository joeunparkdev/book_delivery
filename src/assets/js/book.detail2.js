async function getUserId() {
  try {
    const response = await fetch(`/api/users/me`, {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      return data.data.userId;
    } else {
      console.error("Error getting user ID:", response.statusText);
      throw new Error("Error getting user ID");
    }
  } catch (error) {
    console.error("Error getting user ID:", error);
    throw error;
  }
}

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
    try {
      const selectedRating = parseInt(starRatingSelect.value, 10);
      const starRatingContainer = document.getElementById(
        "starRatingContainer",
      );
      if (starRatingContainer) {
        starRatingContainer.innerHTML = "★".repeat(selectedRating);
      }
    } catch (error) {
      console.error("Error in updateStarRating:", error);
    }
  }

  updateStarRating();

  if (starRatingSelect) {
    starRatingSelect.addEventListener("input", updateStarRating);
  }

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    console.log("DEBUG: urlParams", urlParams.toString());
    console.log("DEBUG: productId", productId);

    if (!productId) {
      throw new Error("Product ID not found in URL");
    }

    const productDetails = await fetchProductDetails(productId);

    console.log("DEBUG: productDetails", productDetails);

    console.log(
      "DEBUG: displayReviews - Before calling displayReviews, productId:",
      productId,
    );
    await displayReviews(productId);
    console.log(
      "DEBUG: displayReviews - After calling displayReviews, productId:",
      productId,
    );

    const productDetailElement = document.getElementById("productDetail");

    if (!productDetailElement.innerHTML.trim()) {
      console.log("DEBUG: Calling displayProductDetails");
      displayProductDetails(productDetails);
    }
    console.log(productId);
    updateStarRating();
  } catch (error) {
    console.error("Error in DOMContentLoaded:", error);
  }

  const addReviewBtn = document.getElementById("addReviewBtn");
  if (addReviewBtn) {
    addReviewBtn.addEventListener("click", addReview);
  }
});

async function displayReviews(productId) {
  try {
    console.log("DEBUG: displayReviews - productId", productId);

    if (!productId) {
      console.error("DEBUG: displayReviews - Product ID is missing");
      throw new Error("Product ID is missing");
    }

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

async function fetchProductDetails(productId) {
  try {
    const response = await fetch(`/api/products/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }
    const data = await response.json();
    console.log("DEBUG: fetchProductDetails - data", data);
    if (data.error && data.error === "Product not found") {
      throw new Error("Product not found");
    }

    return data.data;
  } catch (error) {
    console.error("Error in fetchProductDetails:", error);
    throw error;
  }
}
