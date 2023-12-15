// - **“사장님” - PRODUCT CRUD 기능**
//     - “사장님”은 책 정보를 등록 및 수정, 삭제를 할 수 있어야 합니다.
//     - 메뉴 정보는 다음과 같습니다.
//         - 이미지
//         - 책 이름
//         - 가격
//     - 업장 내에서 동일한 책 이름으로는 재등록이 되지 않습니다.
//     - 메뉴 목록은 모두가 볼 수 있어야 합니다.

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
      console.error("Error checking login status:", response.statusText);
      throw new Error("Error checking login status");
    }
  } catch (error) {
    console.error("Error checking login status:", error);
    throw error;
  }
}

// 전체 상품을 가져오는 함수
async function fetchBooks() {
  try {
    const response = await fetch(`/api/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error("에러 ---", error);
    throw error;
  }
}

// 검색 버튼 클릭 이벤트 리스너
document
  .getElementById("searchButton")
  .addEventListener("click", async function () {
    var searchInput = document.querySelector(".form-control").value;
    alert("검색어: " + searchInput);
  });

// 책 보이기
async function displayBooks() {
  try {
    const books = await fetchBooks();
    console.log(books);
    const productCardsContainer = document.getElementById(
      "productCardsContainer",
    );

    productCardsContainer.innerHTML = "";
    const userRole = await checkUserType();
    console.log(userRole);

    for (let i = 0; i < books.length; i++) {
      const book = books[i];

      console.log("Book details:", book);

      const imageUrl = book.imageUrl;

      console.log("Image URL:", imageUrl);
      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
        <div class="card h-100">
          <img src="${imageUrl}" class="card-img-top" alt="${book.name}">
          <div class="card-body">
            <h5 class="card-title">${book.name}</h5>
            <p class="card-text">설명: ${book.description}</p>
            <p class="card-text">상태: ${book.status}</p>
            <p class="card-text">가격: ${book.price}원</p>
            <a href="book.detail.html?id=${book.productId}" class="btn btn-success" id="viewDetailsBtn">View Details</a>
            <button class="btn btn-success m-2 editBtn" style="display: none;">Edit</button>
            <button class="btn btn-success  m-2 deleteBtn" style="display: none;">Delete</button>
          </div>
        </div>
      `;

      card.querySelector(".card-img-top").style.maxHeight = "100px";
      card.querySelector(".card-img-top").style.maxWidth = "100px";

      productCardsContainer.appendChild(card);

      const editBtn = card.querySelector(".editBtn");
      const deleteBtn = card.querySelector(".deleteBtn");
      const createBtn = document.getElementById("createBtn");
      const deleteAllBtn = document.getElementById("deleteAllBtn");

      if (userRole === "OWNER" || userRole === "DEV") {
        editBtn.style.display = "block";
        deleteBtn.style.display = "block";
        createBtn.style.display = "block";
      } else {
        // "고객님"인 경우에는 버튼을 숨김
        editBtn.style.display = "none";
        deleteBtn.style.display = "none";
        createBtn.style.display = "none";
      }

      if (userRole === "DEV") {
        deleteAllBtn.style.display = "block";
      } else {
        deleteAllBtn.style.display = "none";
      }
    }
  } catch (error) {
    console.error("에러 ---", error);
  }
}

// 페이지 로드 시 자동으로 displayProducts 함수 호출
window.onload = function () {
  // 페이지 로드 시 상품 카드 컨테이너와 검색 결과 타이틀을 숨기기
  // document.getElementById("productCardsContainer").style.display = "none";
  document.getElementById("searchResultsTitle").style.display = "none";
  displayBooks();
};
