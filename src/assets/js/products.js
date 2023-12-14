// - **“사장님” - PRODUCT CRUD 기능**
//     - “사장님”은 책 정보를 등록 및 수정, 삭제를 할 수 있어야 합니다.
//     - 메뉴 정보는 다음과 같습니다.
//         - 이미지
//         - 책 이름
//         - 가격
//     - 업장 내에서 동일한 책 이름으로는 재등록이 되지 않습니다.
//     - 메뉴 목록은 모두가 볼 수 있어야 합니다.

async function checkLoggedIn() {
  try {
    const response = await fetch(`/api/users/me`, {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      return {
        isLoggedIn: true,
        userId: data.userId,
        usertype:data.usertype,
      };
    } else {
      console.error("Error checking login status:", response.statusText);
      return { isLoggedIn: false, userId: null };
    }
  } catch (error) {
    console.error("Error checking login status:", error);
    return { isLoggedIn: false, userId: null };
  }
}

// 전체 상품을 가져오는 함수
async function fetchProducts() {
  try {
    const response = await fetch(`/api/products`);
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

// 검색 버튼 클릭 이벤트 리스너
document.getElementById("searchButton").addEventListener("click", async function () {
  var searchInput = document.querySelector(".form-control").value;
  alert("검색어: " + searchInput);

  try {
      // 검색어가 있으면 상품 검색, 없으면 전체 상품 표시
      const products = searchInput
          ? await searchProductsByName(searchInput)
          : await fetchProducts();
      displayProducts(products);
  } catch (error) {
      console.error("에러 ---", error);
  }
});

// displayProducts 함수 수정하여 데이터를 매개변수로 받도록 함
async function displayProducts(products) {
  try {
    const productCardsContainer = document.getElementById("productCardsContainer");
    const searchResultsContainer = document.getElementById("searchResultsContainer");
    const searchResultsTitle = document.getElementById("searchResultsTitle");

    // 기존 내용을 지우고 새로운 상품 카드를 추가할 요소 생성
    productCardsContainer.innerHTML = "";
    searchResultsContainer.innerHTML = "";

    if (products.length === 0) {
      // 검색 결과가 없는 경우 메시지를 표시
      const noResultsMessage = document.createElement("p");
      noResultsMessage.textContent = "검색 결과가 없습니다.";
      searchResultsContainer.appendChild(noResultsMessage);

      // 상품 카드를 숨김
      productCardsContainer.style.display = "none";

      // 검색 결과 타이틀을 숨김
      searchResultsTitle.style.display = "none";
    } else {
      // 상품 카드를 표시
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        // product 모델에 imageUrl 필드를 사용하여 이미지 URL을 가져옴
        const imageUrl = product.imageUrl;

        // 새로운 상품 카드를 생성하고 추가
        const card = document.createElement("div");
        card.className = "col";
        card.innerHTML = `
            <div class="card h-100">
                <img src="${imageUrl}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <a href="detail.html?id=${product.id}" class="btn btn-success">View Details</a>
                </div>
            </div>
        `;

        // 이미지 크기를 조절
        card.querySelector(".card-img-top").style.maxHeight = "100px";
        card.querySelector(".card-img-top").style.maxWidth = "100px";

        // 판별하여 적절한 컨테이너에 추가
        if (searchInput) {
          searchResultsContainer.appendChild(card);
        } else {
          productCardsContainer.appendChild(card);
        }
      }

      // 상품 카드를 표시하기 전에 컨테이너를 보이도록 변경
      productCardsContainer.style.display = searchInput ? "none" : "block";

      // 검색 결과 타이틀을 표시
      searchResultsTitle.style.display = "block";
    }
  } catch (error) {
    console.error("에러 ---", error);
  }
}

// 페이지 로드 시 자동으로 displayProducts 함수 호출
window.onload = function () {
  // 페이지 로드 시 상품 카드 컨테이너와 검색 결과 타이틀을 숨기기
  document.getElementById("productCardsContainer").style.display = "none";
  document.getElementById("searchResultsTitle").style.display = "none";
};