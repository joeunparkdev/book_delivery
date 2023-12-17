// 삭제 함수
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

// 사용자 유형 체크 함수
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

// 사용자 ID 가져오는 함수
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

// 도서 목록 가져오는 함수
async function fetchBooks() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const bookstoreId = urlParams.get("id");
    const response = await fetch(`/api/stores/${bookstoreId}`);
    console.log(bookstoreId);
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
  return books
    .flatMap((bookstore) => bookstore.products)
    .filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase()),
    );
}

// 도서 카드 생성 함수
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
        <button class="btn btn-success m-2 editBtn" style="display: none;">Edit</button>
        <button class="btn btn-success m-2 deleteBtn" style="display: none;">Delete</button>
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

// 도서 목록을 화면에 표시
async function displayBooks() {
  try {
    const bookstores = await fetchBooks();
    console.log(bookstores);

    const productCardsContainer = document.getElementById(
      "productCardsContainer",
    );

    productCardsContainer.innerHTML = "";
    const userRole = await checkUserType();
    const userId = await getUserId();
    console.log(userRole, userId);
    const createBtn = document.getElementById("createBtn");
    const deleteAllBtn = document.getElementById("deleteAllBtn");

    createBtn.style.display = userRole === "OWNER" ? "block" : "none";
    createBtn.addEventListener("click", function () {
      window.location.href = "createBook.html";
    });

    deleteAllBtn.style.display = userRole === "DEV" ? "block" : "none";

    for (let i = 0; i < bookstores.length; i++) {
      const bookstore = bookstores[i];
      const products = bookstore.products;

      if (products && products.length) {
        for (let j = 0; j < products.length; j++) {
          const book = products[j];
          const imageUrl = book.imageUrl;
          console.log(book, imageUrl);
          const card = createBookCard(book);
          productCardsContainer.appendChild(card);

          const editBtn = card.querySelector(".editBtn");
          const deleteBtn = card.querySelector(".deleteBtn");

          // 삭제 버튼 클릭 이벤트
          deleteBtn.addEventListener("click", async (e) => {
            const confirmed = confirm("정말로 이 책을 삭제하시겠습니까?");
            if (confirmed) {
              try {
                await deleteBook(book.productId);
                await displayBooks();
              } catch (error) {
                console.error("Error deleting book:", error);
              }
            }
          });

          // 수정 버튼 클릭 이벤트
          editBtn.addEventListener("click", () => {
            window.location.href = `editBook.html?id=${book.productId}`;
          });

          // 버튼은 사용자 유형에 따라 보이고 감추도록 수정
          if (userRole === "OWNER" || userRole === "DEV") {
            if (userId && userId === bookstore.userId) {
              // 작성자의 경우 버튼 보이기
              editBtn.style.display = "block";
              deleteBtn.style.display = "block";
            } else {
              // 작성자가 아닌 경우 버튼 감추기
              editBtn.style.display = "none";
              deleteBtn.style.display = "none";
            }
          } else {
            // 일반 사용자의 경우 버튼 감추기
            editBtn.style.display = "none";
            deleteBtn.style.display = "none";
          }
        }
      } else {
        console.error("에러 --- Products is undefined or empty.");
      }
    }
  } catch (error) {
    console.error("에러 ---", error);
  }
}

// 페이지 로드 시 도서 목록 표시
displayBooks();
