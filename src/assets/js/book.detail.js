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

function displayReviews(reviews) {
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
}

async function getUserId() {
  // 사용자 ID를 가져오는 비동기 함수 구현
}

async function fetchProductDetails(productId) {
  try {
    const response = await fetch(`/api/products/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
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
    const productDetails = await fetchProductDetails(productId);
    displayProductDetails(productDetails);
    displayReviews(productDetails.reviews);
  } catch (error) {
    console.error("에러 ---", error);
  }
};
