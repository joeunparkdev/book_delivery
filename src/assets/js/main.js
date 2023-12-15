// - **관리자 Admin CRUD기능**
//     - 관리자는 Bookstore와 Product을 관리할 수 있어야 한다.
// - **“사장님” - BOOKSTORE CRUD 기능**
//     - “사장님”은 업장 정보를 등록 및 수정, 삭제를 할 수 있어야 합니다.
//     - “사장님”은 업장 정보를 오직 1개만 갖고 있을 수 있어야 합니다.
//     - 업장 정보 목록은 모두가 볼 수 있어야 합니다.

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

//서점 보이기
async function displayBookstores() {
  try {
    const bookstores = await fetchBookstores();
    const productCardsContainer = document.getElementById(
      "productCardsContainer",
    );

    productCardsContainer.innerHTML = "";
    const userRole = await checkUserType();
    console.log(userRole);

    for (let i = 0; i < bookstores.length; i++) {
      const bookstore = bookstores[i];

      const imageUrl = bookstore.imageUrl;

      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
        <div class="card h-100">
          <img src="${imageUrl}" class="card-img-top" alt="${bookstore.name}">
          <div class="card-body">
            <h5 class="card-title">${bookstore.name}</h5>
            <p class="card-text">위치: ${bookstore.address}</p>
            <p class="card-text">설명: ${bookstore.description}</p>
            <p class="card-text">상태: ${bookstore.status}</p>
            <a href="detail.html?id=${bookstore.id}" class="btn btn-success" id="viewDetailsBtn">View Details</a>
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

//서점 삭제
//서점 전체 삭제
//서점 수정
//서점 만들기

// 페이지 로드 시 자동으로 displayBookstores 함수 호출
window.onload = displayBookstores;
