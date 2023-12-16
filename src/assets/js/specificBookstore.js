async function deleteBook(bookId) {
  console.log("Deleting book with ID:", bookId);

  if (!bookId) {
    console.error("Error: bookId is undefined or empty");
    return;
  }

  try {
    const response = await fetch(`/api/stores/${bookId}`, {
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

//검색
document
  .getElementById("searchButton")
  .addEventListener("click", async function () {
    var searchInput = document.querySelector(".form-control").value;
    alert("검색어: " + searchInput);
  });

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

    if (userRole === "OWNER") {
      createBtn.style.display = "block";
    } else {
      createBtn.style.display = "none";
    }

    createBtn.addEventListener("click", function () {
      window.location.href = "createBook.html";
    });

    if (userRole === "DEV") {
      deleteAllBtn.style.display = "block";
    } else {
      deleteAllBtn.style.display = "none";
    }

    for (let i = 0; i < bookstores.length; i++) {
      const bookstore = bookstores[i];
      const products = bookstore.products;

      if (products && products.length) {
        for (let j = 0; j < products.length; j++) {
          const book = products[j];
          const imageUrl = book.imageUrl;

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
                    <button class="btn btn-success m-2 deleteBtn" style="display: none;">Delete</button>
                  </div>
                </div>
              `;

          card.querySelector(".card-img-top").style.maxHeight = "100px";
          card.querySelector(".card-img-top").style.maxWidth = "100px";

          productCardsContainer.appendChild(card);

          const editBtn = card.querySelector(".editBtn");
          const deleteBtn = card.querySelector(".deleteBtn");

          editBtn.addEventListener("click", () => {
            window.location.href = `editStore.html?id=${book.productId}`;
          });

          // 삭제 버튼 클릭 이벤트
          deleteBtn.addEventListener("click", async (e) => {
            const confirmed = confirm("정말로 이 서점을 삭제하시겠습니까?");

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
            window.location.href = `editStore.html?id=${book.productId}`;
          });

          if (userRole === "OWNER") {
            // 작성자가 아닌 경우 버튼 감추기
            if (userId !== book.userId) {
              editBtn.style.display = "none";
              deleteBtn.style.display = "none";
            } else {
              editBtn.style.display = "block";
              deleteBtn.style.display = "block";
            }
          } else {
            editBtn.style.display = "none";
            deleteBtn.style.display = "none";
          }

          if (userRole !== "OWNER" && userRole !== "DEV") {
            const bookIdElement = card.querySelector("#productId");
            bookIdElement.style.display = "none";
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

displayBooks();
