async function fetchBookstores() {
  try {
    const response = await fetch(`/api/stores`);
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

//서점 검색
document.getElementById("searchButton").addEventListener("click", function () {
  var searchInput = document.querySelector(".form-control").value;
  alert("검색어: " + searchInput);
});

// 서점 디스플레이
async function displayBookstores() {
  try {
    const bookstores = await fetchBookstores();
    const productCardsContainer = document.getElementById(
      "productCardsContainer",
    );

    // 기존 내용을 지우고 새로운 서점 카드를 추가할 요소 생성
    productCardsContainer.innerHTML = "";

    for (let i = 0; i < bookstores.length; i++) {
      const bookstore = bookstores[i];

      // product 모델에 imageUrl 필드를 사용하여 이미지 URL을 가져옴
      const imageUrl = bookstore.imageUrl;

      // 새로운 서점 카드를 생성하고 추가
      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
        <div class="card h-100">
          <img src="${imageUrl}" class="card-img-top" alt="${bookstore.name}">
          <div class="card-body">
            <h5 class="card-title">${bookstore.name}</h5>
            <p class="card-text">가격: ${bookstore.price}원</p>
            <p class="card-text">위치: ${bookstore.address}</p>
            <p class="card-text">설명: ${bookstore.description}</p>
            <p class="card-text">상태: ${bookstore.status}</p>
          <a href="detail.html?id=${bookstore.id}" class="btn btn-success">View Details</a>
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

// 페이지 로드 시 자동으로 displayBookstores 함수 호출
window.onload = displayBookstores;
