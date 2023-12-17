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

// 별점을 클릭할 때 호출되는 함수
function handleStarClick(starRating) {
  const starRatingContainer = document.getElementById("starRatingContainer");
  if (starRatingContainer) {
    starRatingContainer.innerHTML = "★".repeat(starRating);
  }

  const ratingSelect = document.getElementById("starRating");
  if (ratingSelect) {
    ratingSelect.value = starRating;
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

  document.addEventListener("click", async (event) => {
    const saveBtn = event.target.closest(".btn-save");
    if (saveBtn) {
      const reviewId = saveBtn.getAttribute("data-review-id");
      if (reviewId) {
        await saveEditedReview(reviewId);
      }
    }
  });
});

function formatDateTime(dateString) {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더하기
  const day = date.getDate();

  const period = hours >= 12 ? "오후" : "오전";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return ` ${year}년 ${month}월 ${day}일 ${period}${formattedHours}시 ${formattedMinutes}분`;
}
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
            <p class="card-text">별점: ${getStarIcons(review.rating)}</p>
            <p class="card-text">작성일: ${formatDateTime(review.createdAt)}</p>
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
    editBtn.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(review.reviewId);
      openEditReviewModal(review.reviewId, review.rating, review.reviewText);
    });

    // 삭제 버튼 클릭 이벤트
    deleteBtn.addEventListener("click", async (event) => {
      const confirmed = confirm("정말로 이 서점을 삭제하시겠습니까?");
      event.preventDefault();
      if (confirmed) {
        try {
          await deleteReview(review.reviewId);
        } catch (error) {
          console.error("Error deleting review:", error);
        }
      }
    });
  }
}

// 별점을 별 이모지로 변환하는 함수
function getStarIcons(rating) {
  return "⭐".repeat(rating);
}

// openEditReviewModal 함수 수정
function openEditReviewModal(reviewId, currentRating, currentReviewText) {
  // 리뷰Id를 기반으로 고유한 모달 Id를 생성합니다.
  const modalId = `editReviewModal_${reviewId}`;
  const selectId = `editRating_${reviewId}`;

  // 모달이 이미 존재하는지 확인하고, 없으면 생성합니다.
  if (!document.getElementById(modalId)) {
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = `
      <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="editReviewModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editReviewModalLabel">리뷰 수정</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <!-- 리뷰 수정을 위한 폼 요소들을 여기에 추가합니다 -->
              <label for="${selectId}">평점:</label>
              <select id="${selectId}" class="form-select" required>
                <option value="1" ${
                  currentRating === 1 ? "selected" : ""
                }>⭐</option>
                <option value="2" ${
                  currentRating === 2 ? "selected" : ""
                }>⭐⭐</option>
                <option value="3" ${
                  currentRating === 3 ? "selected" : ""
                }>⭐⭐⭐</option>
                <option value="4" ${
                  currentRating === 4 ? "selected" : ""
                }>⭐⭐⭐⭐</option>
                <option value="5" ${
                  currentRating === 5 ? "selected" : ""
                }>⭐⭐⭐⭐⭐</option>
              </select>
              <label for="editReviewText_${reviewId}">리뷰 내용:</label>
              <textarea id="editReviewText_${reviewId}" class="form-control" required>${currentReviewText}</textarea>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
              <button type="button" class="btn btn-success btn-save" data-review-id="${reviewId}">변경 사항 저장</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // 모달을 body에 추가
    document.body.appendChild(modalContainer);
  }

  // 모달을 보여주기
  const editReviewModal = new bootstrap.Modal(document.getElementById(modalId));
  editReviewModal.show();
}

// 수정된 리뷰를 저장하는 함수
async function saveEditedReview(reviewId) {
  const editRatingInput = document.getElementById(`editRating_${reviewId}`);
  const editReviewTextInput = document.getElementById(
    `editReviewText_${reviewId}`,
  );

  const rating = parseInt(editRatingInput.value, 10);
  const reviewText = editReviewTextInput.value;

  console.log("Review ID:", reviewId);
  console.log("Updated Rating:", rating);
  console.log("Updated Review Text:", reviewText);

  // 새로운 데이터로 updateReview 함수를 호출
  try {
    await updateReview(reviewId, rating, reviewText);
    // 성공적으로 업데이트한 후에 모달을 닫기
    const editReviewModal = new bootstrap.Modal(
      document.getElementById(`editReviewModal_${reviewId}`),
    );
    console.log("모달을 닫기 전에 출력되는지 확인");
    $("#myModal").modal("hide");
    console.log("모달을 닫은 후에 출력되는지 확인");
    window.location.reload();
  } catch (error) {
    console.error("리뷰 업데이트 에러:", error);
  }
}

async function deleteReview(reviewId) {
  if (!reviewId) {
    console.error("Error: reviewId is undefined or empty");
    return;
  }

  try {
    const response = await fetch(`/api/review/${reviewId}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    alert("리뷰가 성공적으로 삭제되었습니다.");
    window.location.reload();
  } catch (error) {
    console.error("에러 ---", error);
  }
}

async function updateReview(reviewId, rating, reviewText) {
  if (!reviewId) {
    console.error("Error: reviewId is undefined or empty");
    return;
  }

  try {
    const url = `/api/review/${reviewId}`;
    const requestBody = {
      rating,
      reviewText,
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

    // 리뷰 제출 완료 메시지를 화면에 표시
    alert("리뷰가 성공적으로 제출되었습니다.");

    // 페이지 새로고침
    window.location.reload();
  } catch (error) {
    console.error("리뷰 제출 중 에러 발생:", error.message);
  }
}

function displayProductDetails(product) {
  const productDetailElement = document.getElementById("productDetail");

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

    if (data.error && data.error === "Product not found") {
      throw new Error("Product not found");
    }
    return data.data;
  } catch (error) {
    console.error("Error in fetchProductDetails:", error);
    throw error;
  }
}
