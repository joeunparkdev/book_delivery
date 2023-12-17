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
      throw new Error("Error getting user ID");
    }
  } catch (error) {
    throw error;
  }
}

async function checkUserType() {
  try {
    const response = await fetch(`/api/users/me`, {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      return data.data.userType;
    } else {
      throw new Error("Error checking login status");
    }
  } catch (error) {
    throw error;
  }
}

function addReview() {
  const ratingSelect = document.getElementById("starRating");
  const reviewTextInput = document.querySelector(".review-wr textarea");

  if (ratingSelect && reviewTextInput) {
    const rating = parseInt(ratingSelect.value);
    const reviewText = reviewTextInput.value;
    submitReview(rating, reviewText);
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const starRatingSelect = document.getElementById("starRating");
  const reviewTextInput = document.querySelector(".review-wr textarea");

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

  if (reviewTextInput) {
    reviewTextInput.addEventListener("input", updateStarRating);
  }

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const productIdFromURL = urlParams.get("id");

    if (!productIdFromURL) {
      throw new Error("Product ID not found in URL");
    }

    const productDetails = await fetchProductDetails(productIdFromURL);

    await displayReviews(productIdFromURL);

    const productDetailElement = document.getElementById("productDetail");

    displayProductDetails(productDetails);
  } catch (error) {
    console.error("Error in DOMContentLoaded:", error);
  }

  const addReviewBtn = document.getElementById("addReviewBtn");
  addReviewBtn.addEventListener("click", () => {
    addReview();
  });
});

async function displayReviews(productId) {
  if (!productId) {
    throw new Error("Product ID is missing");
  }

  const data = await fetchReview(productId);
  const reviews = data.data;

  const reviewListElement = document.getElementById("reviewList");
  reviewListElement.innerHTML = "";

  if (!reviews || !reviews.length) {
    const reviewListElement = document.getElementById("reviewList");
    reviewListElement.innerHTML = "<p>리뷰가 존재하지않습니다</p>";
    return;
  }

  const userId = await getUserId();
  const userType = await checkUserType();

  for (let i = 0; i < reviews.length; i++) {
    const review = reviews[i];
    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
          <p class="card-text">작성자 id: ${review.userId}</p>
            <p class="card-text">리뷰 내용: ${review.reviewText}</p>
            <p class="card-text">별점: ${review.rating}</p>
            <p class="card-text">작성일: ${review.createdAt}</p>
            <button class="btn btn-success m-2 editBtn" style="display: none;">Edit</button>
            <button class="btn btn-success m-2 deleteBtn" style="display: none;">Delete</button>
          </div>
        </div>
      `;

    reviewListElement.appendChild(card);

    const editBtn = card.querySelector(".editBtn");
    const deleteBtn = card.querySelector(".deleteBtn");

    if (userId && userId === review.userId) {
      editBtn.style.display = "block";
      deleteBtn.style.display = "block";
    }
    // 수정 버튼 클릭 이벤트
    editBtn.addEventListener("click", () => {
      updateReview(review.reviewId);
    });

    // 삭제 버튼 클릭 이벤트
    deleteBtn.addEventListener("click", async (e) => {
      const confirmed = confirm("정말로 이 서점을 삭제하시겠습니까?");

      if (confirmed) {
        try {
          await review(review.reviewId);
        } catch (error) {
          console.error("Error deleting review:", error);
        }
      }
    });
  }
}

async function deleteReview(reviewId) {
  if (!reviewId) {
    console.error("Error: reviewId is undefined or empty");
    return;
  }

  try {
    const response = await fetch(`/api/products/${reviewId}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    alert("리뷰가 성공적으로 삭제되었습니다.");
  } catch (error) {
    console.error("에러 ---", error);
  }
}

async function updateReview(reviewId) {
  if (!reviewId) {
    console.error("Error: reviewId is undefined or empty");
    return;
  }

  try {
    const url = `/api/products/${reviewId}`;
    const requestBody = {
      rating: rating,
      reviewText: reviewText,
    };

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    alert("리뷰가 성공적으로 수정되었습니다.");
  } catch (error) {
    console.error("에러 ---", error);
  }
}

async function fetchReview(productId) {
  const url = `/api/review/${productId}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(
        `리뷰 가져오기 실패. HTTP 오류! 상태: ${response.status}`,
      );
    }

    const data = await response.json();

    if (!data || !data.data || !data.data.length) {
      console.warn("가져온 리뷰가 없습니다.");
    }

    return data;
  } catch (error) {
    console.error("리뷰 가져오는 중 에러 발생:", error.message);
  }
}

async function submitReview(rating, reviewText) {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
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
  const descriptionElement = document.createElement("div");
  const bookInfoShowElement = document.createElement("div");
  const bookInfoTextElement = document.createElement("div");
  const bookBucketBtnElement = document.createElement("div");
  const productMainTitleElement = document.createElement("h3");
  const titleElement = document.createElement("h2");
  const authorElement = document.createElement("div");
  const imageElement = document.createElement("img");
  const putProductBtn = document.createElement("button");
  const orderProductBtn = document.createElement("button");

  productMainTitleElement.innerText = "상세보기";
  imageElement.className = "product-detail-img";
  imageElement.src = product.imageUrl;
  bookInfoShowElement.appendChild(productMainTitleElement);
  bookInfoShowElement.appendChild(imageElement);
  productDetailElement.appendChild(bookInfoShowElement);

  titleElement.textContent = product.name;
  authorElement.textContent = `작가: ${product.author}`;
  descriptionElement.textContent = `설명: ${product.description}`;
  imageElement.alt = product.name;
  bookInfoTextElement.className = "book-detail-text";

  bookBucketBtnElement.className = "buy-button";

  putProductBtn.setAttribute("type", "button");
  putProductBtn.setAttribute("id", "addToCartBtn");
  putProductBtn.className = "btn btn-success me-2";
  putProductBtn.innerText = "장바구니";

  orderProductBtn.setAttribute("type", "button");
  orderProductBtn.setAttribute("id", "directPurchaseBtn");
  orderProductBtn.className = "btn btn-success";
  orderProductBtn.innerText = "바로주문";

  bookInfoTextElement.appendChild(titleElement);
  bookInfoTextElement.appendChild(descriptionElement);
  bookInfoTextElement.appendChild(authorElement);
  bookBucketBtnElement.appendChild(orderProductBtn);
  bookBucketBtnElement.appendChild(putProductBtn);
  bookInfoTextElement.appendChild(bookBucketBtnElement);
  productDetailElement.appendChild(bookInfoTextElement);
}

async function fetchProductDetails(productId) {
  try {
    const response = await fetch(`/api/products/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }
    const data = await response.json();

    if (data.error && data.error === "Product not found") {
      throw new Error("Product not found");
    }
    return data.data;
  } catch (error) {
    console.error("Error in fetchProductDetails:", error);
    throw error;
  }
}
