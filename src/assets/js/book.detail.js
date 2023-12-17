
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

async function getUserId() {
  try {
    const response = await fetch(`/api/users/me`, {
      method: "GET",
      headers: {
        "Contemt-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.ok) {
      const result = await response.json();
      const userData = result.data;
      console.log(userData);
      document.getElementById("userName").innerText =
        `이름: ${userData.username}`;
      document.getElementById("userEmail").innerText =
        `Email: ${userData.email}`;
      document.getElementById("userPoint").innerText =
        `Point: ${userData.points}`;
    } else if (response.status === 403) {
      alert("조회할 권한이 없습니다.");
    } else {
      console.error(
        "Error fetching user profile:",
        response.status,
        response.statusText,
      );
    }
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
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
