async function deleteBook(bookId) {
  console.log("Deleting book with ID:", bookId);

  if (!bookId) {
    console.error("Error: bookId is undefined or empty");
    return;
  }

  try {
    const response = await fetch(`/api/products/${bookId}`, {
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
  .addEventListener("click", async function (event) {
    event.preventDefault();
    try {
      const searchInput = document.querySelector(".form-control").value;
      alert("검색어: " + searchInput);

      // 서버에 검색어를 전달하여 해당하는 도서 목록을 가져옴
      const books = await fetchBooks();
      const filteredBooks = filterBooksBySearchInput(books, searchInput);

      // 필터링된 도서 목록을 화면에 표시
      displayFilteredBooks(filteredBooks);
    } catch (error) {
      console.error("에러 ---", error);
    }
  });

// 검색어에 맞는 도서 목록 필터링
function filterBooksBySearchInput(books, searchInput) {
  return books.filter((book) => book.name.includes(searchInput));
}

// 도서 카드를 생성하는 함수
function createBookCard(book) {
  const card = document.createElement("div");
  card.className = "col";
  card.innerHTML = `
    <div class="card h-100">
      <img src="${book.imageUrl}" class="card-img-top" alt="${book.name}">
      <div class="card-body">
        <h5 class="card-title">${book.name}</h5>
        <p class="card-text">설명: ${book.description}</p>
        <p class="card-text">상태: ${book.status}</p>
        <p class="card-text">가격: ${book.price}원</p>
        <a href="book.detail.html?id=${book.productId}" class="btn btn-success">View Details</a>
      </div>
    </div>
  `;

  card.querySelector(".card-img-top").style.maxHeight = "100px";
  card.querySelector(".card-img-top").style.maxWidth = "100px";

  return card;
}

// 필터링된 도서 목록을 화면에 표시
function displayFilteredBooks(filteredBooks) {
  const productCardsContainer = document.getElementById(
    "productCardsContainer",
  );
  const searchResultsContainer = document.getElementById(
    "searchResultsContainer",
  );

  // 검색 결과 컨테이너 초기화
  if (searchResultsContainer) {
    searchResultsContainer.innerHTML = "";
  } else {
    // 검색 결과 컨테이너가 없으면 생성
    const searchResultsContainer = document.createElement("div");
    searchResultsContainer.id = "searchResultsContainer";
    document.body.appendChild(searchResultsContainer);
  }

  if (filteredBooks && filteredBooks.length > 0) {
    // 검색 결과가 있는 경우
    const title = document.createElement("h2");
    title.className = "text-success mb-4";
    title.textContent = "검색 결과";
    searchResultsContainer.appendChild(title);

    for (let i = 0; i < filteredBooks.length; i++) {
      const book = filteredBooks[i];
      // 도서 카드 생성 및 추가
      const card = createBookCard(book);
      searchResultsContainer.appendChild(card);
    }
  } else {
    // 검색 결과가 없는 경우
    const noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "검색 결과가 없습니다.";
    searchResultsContainer.appendChild(noResultsMessage);
  }
}

// 전체 상품을 화면에 표시하는 함수
async function displayBooks() {
  try {
    const books = await fetchBooks();
    const productCardsContainer = document.getElementById(
      "productCardsContainer",
    );

    productCardsContainer.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      // 도서 카드 생성 및 추가
      const card = createBookCard(book);
      productCardsContainer.appendChild(card);
    }
  } catch (error) {
    console.error("에러 ---", error);
  }
}

displayBooks();
