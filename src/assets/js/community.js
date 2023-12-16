async function fetchReviews() {
  try {
    const response = await fetch(`/api/reviews`);
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

//리뷰 검색
document.getElementById("searchButton").addEventListener("click", function () {
  var searchInput = document.querySelector(".form-control").value;
  alert("검색어: " + searchInput);
});

// 리뷰 디스플레이
async function displayReviews() {
  try {
    const Reviews = await fetchReviews();
    const productCardsContainer = document.getElementById(
      "productCardsContainer",
    );

    // 기존 내용을 지우고 새로운 리뷰 카드를 추가할 요소 생성
    productCardsContainer.innerHTML = "";

    for (let i = 0; i < Reviews.length; i++) {
      const review = Reviews[i];

      // product 모델에 imageUrl 필드를 사용하여 이미지 URL을 가져옴
      const imageUrl = review.imageUrl;

      // 새로운 리뷰 카드를 생성하고 추가
      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
        <div class="card h-100">
          <img src="${imageUrl}" class="card-img-top" alt="${review.name}">
          <div class="card-body">
            <h5 class="card-title">${review.name}</h5>
            <p class="card-text">가격: ${review.price}원</p>
            <p class="card-text">위치: ${review.address}</p>
            <p class="card-text">설명: ${review.description}</p>
            <p class="card-text">상태: ${review.status}</p>
          <a href="book.detail.html?id=${review.id}" class="btn btn-success">View Details</a>
          </div>
        </div>
      `;

      // 이미지 크기를 조절
      card.querySelector(".card-img-top").style.maxHeight = "100px";
      card.querySelector(".card-img-top").style.maxWidth = "100px";

      productCardsContainer.appendChild(card);
    }
  } catch (error) {
    console.error("에러 ---", error);
  }
}

// 페이지 로드 시 자동으로 displayReviews 함수 호출
window.onload = displayReviews;
