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
      console.error(
        `HTTP error! Status: ${response.status}`,
        await response.text(),
      );
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("에러 ---", error);
    throw error;
  }
}

// 사용자의 ID를 가져오는 함수
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

async function deleteBookstore(bookstoreId) {
  console.log("Deleting bookstore with ID:", bookstoreId);

  if (!bookstoreId) {
    console.error("Error: bookstoreId is undefined or empty");
    return;
  }

  try {
    const response = await fetch(`/api/stores/${bookstoreId}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    alert("서점이 성공적으로 삭제되었습니다.");
  } catch (error) {
    console.error("에러 ---", error);
  }
}

async function displayBookstores() {
  try {
    const bookstores = await fetchBookstores();
    const productCardsContainer = document.getElementById(
      "productCardsContainer",
    );

    productCardsContainer.innerHTML = "";

    const userId = await getUserId();
    const userType = await checkUserType();
    console.log("User ID:", userId);
    console.log("User Type:", userType);

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
            <a href="specificBookstore.html?id=${bookstore.bookStoreId}" class="btn btn-success" id="viewDetailsBtn">View Details</a>
            <button class="btn btn-success m-2 editBtn" style="display: none;">Edit</button>
            <button class="btn btn-success m-2 deleteBtn" style="display: none;">Delete</button>
          </div>
        </div>
      `;

      card.querySelector(".card-img-top").style.maxHeight = "100px";
      card.querySelector(".card-img-top").style.maxWidth = "100px";

      productCardsContainer.appendChild(card);

      const editBtn = card.querySelector(".editBtn");
      const deleteBtn = card.querySelector(".deleteBtn");

      // 수정 및 삭제 버튼은 로그인한 사용자의 아이디와 서점의 아이디가 일치할 때만 표시
      if (userId && userId === bookstore.userId) {
        editBtn.style.display = "block";
        deleteBtn.style.display = "block";

        // 수정 버튼 클릭 이벤트
        editBtn.addEventListener("click", () => {
          window.location.href = `editStore.html?id=${bookstore.bookStoreId}`;
        });

        // 삭제 버튼 클릭 이벤트
        deleteBtn.addEventListener("click", async (e) => {
          const confirmed = confirm("정말로 이 서점을 삭제하시겠습니까?");

          if (confirmed) {
            try {
              await deleteBookstore(bookstore.bookStoreId);
              await displayBookstores();
            } catch (error) {
              console.error("Error deleting bookstore:", error);
            }
          }
        });
      }
    }

    // "Create" 버튼과 "Delete All" 버튼 가져오기
    const createBtn = document.getElementById("createBtn");
    const deleteAllBtn = document.getElementById("deleteAllBtn");

    // 로그인한 사용자의 유저 타입에 따라 버튼 표시 여부 결정
    if (userType === "OWNER") {
      createBtn.style.display = "block";
      deleteAllBtn.style.display = "none";
    } else if (userType === "DEV") {
      createBtn.style.display = "none";
      deleteAllBtn.style.display = "block";
    } else {
      createBtn.style.display = "none";
      deleteAllBtn.style.display = "none";
    }
  } catch (error) {
    console.error("Error displaying bookstores:", error);
  }
}

// 새 업장 생성 버튼 클릭 시 이벤트 처리
document.getElementById("createBtn").addEventListener("click", async function () {
  try {
      // 내 업장 조회
      const myStores = await fetchMyStore();

      if (myStores && myStores.length > 0) {
          // 이미 업장이 등록되어 있다면 에러 메시지 표시
          alert("업장은 한 개만 등록할 수 있습니다.");
      } else {
          // 업장이 없으면 createStore.html로 이동
          window.location.href = "createStore.html";
      }
  } catch (error) {
      console.error("새 업장 생성 및 조회 중 오류:", error);
  }
});

// 사용자의 업장을 조회하는 함수
async function fetchMyStore() {
  try {
      const response = await fetch("/api/stores/me", {
          method: "GET",
          credentials: "include",
      });

      if (response.ok) {
          const data = await response.json();
          return data.data;
      } else if (response.status === 404) {
          // 만약 업장이 없는 경우, 빈 배열 반환
          return [];
      } else {
          console.error("Error fetching my store:", response.statusText);
          throw new Error("Error fetching my store");
      }
  } catch (error) {
      console.error("에러 ---", error);
      throw error;
  }
}


// 검색 버튼 클릭 시 이벤트 처리
document
  .getElementById("searchButton")
  .addEventListener("click", async function (event) {
    event.preventDefault();
    try {
      const searchInput = document.querySelector(".form-control").value;
      alert("검색어: " + searchInput);

      // 서버에 검색어를 전달하여 해당하는 도서 목록을 가져옴
      const bookstores = await fetchBookstores();
      const filteredBookstores = filterBookstoresBySearchInput(
        bookstores,
        searchInput,
      );

      // 필터링된 도서 목록을 화면에 표시
      displayFilteredBookstores(filteredBookstores);
    } catch (error) {
      console.error("에러 ---", error);
    }
  });

// 서점을 검색하는 함수
async function searchBookstores(query) {
  try {
    const response = await fetch(`/api/search/stores${query}`, {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      console.error("Error searching bookstores:", response.statusText);
      throw new Error("Error searching bookstores");
    }
  } catch (error) {
    console.error("에러 ---", error);
    throw error;
  }
}

// 서점 카드를 생성하는 함수
function createBookstoreCard(bookstore) {
  const card = document.createElement("div");
  card.className = "col";
  card.innerHTML = `
    <div class="card h-100">
      <img src="${bookstore.imageUrl}" class="card-img-top" alt="${bookstore.name}">
      <div class="card-body">
      <h5 class="card-title">${bookstore.name}</h5>
      <p class="card-text">위치: ${bookstore.address}</p>
      <p class="card-text">설명: ${bookstore.description}</p>
      <p class="card-text">상태: ${bookstore.status}</p>
      <a href="specificBookstore.html?id=${bookstore.bookStoreId}" class="btn btn-success" id="viewDetailsBtn">View Details</a>
      </div>
    </div>
  `;

  card.querySelector(".card-img-top").style.maxHeight = "100px";
  card.querySelector(".card-img-top").style.maxWidth = "100px";

  return card;
}

// 필터링된 서점 목록을 화면에 표시
function displayFilteredBookstores(filteredBookstores) {
  const productCardsContainer = document.getElementById(
    "productCardsContainer",
  );
  let searchResultsContainer = document.getElementById(
    "searchResultsContainer",
  );

  // 검색 결과 컨테이너 초기화
  if (searchResultsContainer) {
    searchResultsContainer.innerHTML = "";
  } else {
    // 검색 결과 컨테이너가 없으면 생성
    searchResultsContainer = document.createElement("div");
    searchResultsContainer.id = "searchResultsContainer";
    document.body.appendChild(searchResultsContainer);
  }

  if (filteredBookstores && filteredBookstores.length > 0) {
    // 검색 결과가 있는 경우
    const title = document.createElement("h2");
    title.className = "text-success mb-4";
    title.textContent = "검색 결과";
    searchResultsContainer.appendChild(title);

    for (let i = 0; i < filteredBookstores.length; i++) {
      const bookstore = filteredBookstores[i];
      // 서점 카드 생성 및 추가
      const card = createBookstoreCard(bookstore);
      searchResultsContainer.appendChild(card);
    }
  } else {
    // 검색 결과가 없는 경우
    const noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "검색 결과가 없습니다.";
    searchResultsContainer.appendChild(noResultsMessage);
  }
}

// 검색어에 맞는 서점 목록 필터링
function filterBookstoresBySearchInput(bookstores, searchInput) {
  return bookstores.filter((bookstore) => bookstore.name.includes(searchInput));
}

displayBookstores();
