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

document.getElementById("searchButton").addEventListener("click", function () {
  var searchInput = document.querySelector(".form-control").value;
  alert("검색어: " + searchInput);
});

async function displayBookstores() {
  try {
    const bookstores = await fetchBookstores();
    const productCardsContainer = document.getElementById(
      "productCardsContainer",
    );

    productCardsContainer.innerHTML = "";
    const userRole = await checkUserType();
    console.log(userRole);

    const createBtn = document.getElementById("createBtn");
    const deleteAllBtn = document.getElementById("deleteAllBtn");

    createBtn.style.display = "block";

    createBtn.addEventListener("click", function () {
      window.location.href = "createStore.html";
    });

    if (userRole === "OWNER" || userRole === "DEV") {
      deleteAllBtn.style.display = "block";
    } else {
      deleteAllBtn.style.display = "none";
    }

    for (let i = 0; i < bookstores.length; i++) {
      const bookstore = bookstores[i];
      const imageUrl = bookstore.imageUrl;
      console.log(bookstore.bookStoreId);
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

      deleteBtn.addEventListener("click", (e) => {
        const confirmed = confirm("정말로 이 서점을 삭제하시겠습니까?");

        if (confirmed) {
          try {
            deleteBookstore(bookstore.bookStoreId);
            displayBookstores();
          } catch (error) {
            console.error("Error deleting bookstore:", error);
          }
        }
      });

      if (userRole === "OWNER" || userRole === "DEV") {
        editBtn.style.display = "block";
        deleteBtn.style.display = "block";
      } else {
        editBtn.style.display = "none";
        deleteBtn.style.display = "none";
      }

      if (userRole !== "OWNER" && userRole !== "DEV") {
        const bookStoreIdElement = card.querySelector("#bookStoreId");
        bookStoreIdElement.style.display = "none";
      }
    }
  } catch (error) {
    console.error("에러 ---", error);
  }
}

displayBookstores();
