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
        <button class="btn btn-success m-2 editBtn" style="display: none;">Edit</button>
        <button class="btn btn-success m-2 deleteBtn" style="display: none;">Delete</button>
      </div>
    </div>
  `;

  card.querySelector(".card-img-top").style.maxHeight = "100px";
  card.querySelector(".card-img-top").style.maxWidth = "100px";

  // 수정 및 삭제 버튼을 표시 또는 숨김
  const editBtn = card.querySelector(".editBtn");
  const deleteBtn = card.querySelector(".deleteBtn");

  getUserId().then((userId) => {
    // 로그인한 사용자의 ID와 도서의 작성자 ID 비교
    if (userId && userId === book.userId) {
      editBtn.style.display = "block";
      deleteBtn.style.display = "block";
    } else {
      editBtn.style.display = "none";
      deleteBtn.style.display = "none";
    }
  });

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

  return card;
}

// 필터링된 도서 목록을 화면에 표시
function displayFilteredBooks(filteredBooks) {
  const productCardsContainer = document.getElementById(
    "productCardsContainer",
  );

  // 검색 결과를 전체 상품 목록에 추가
  productCardsContainer.innerHTML = "";

  if (filteredBooks && filteredBooks.length > 0) {
    for (let i = 0; i < filteredBooks.length; i++) {
      const book = filteredBooks[i];
      // 도서 카드 생성 및 추가
      const card = createBookCard(book);
      productCardsContainer.appendChild(card);
    }
  } else {
    // 검색 결과가 없는 경우
    const noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "검색 결과가 없습니다.";
    productCardsContainer.appendChild(noResultsMessage);
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

    // 로그인한 사용자의 유저 타입 가져오기
    const userType = await checkUserType();

    for (let i = 0; i < books.length; i++) {
      const book = books[i];
<<<<<<< HEAD

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

=======
      // 도서 카드 생성 및 추가
      const card = createBookCard(book);
>>>>>>> main
      productCardsContainer.appendChild(card);
    }

    // "Create" 버튼과 전체 삭제 버튼 가져오기
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
    console.error("에러 ---", error);
  }
  createBtn.addEventListener("click", function () {
    window.location.href = "createBook.html";
  });
}

displayBooks();
