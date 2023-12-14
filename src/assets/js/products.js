async function fetchProducts() {
  try {
    const response = await fetch(`http://localhost:3001/api/products`);
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

//상품 검색
document.getElementById("searchButton").addEventListener("click", function() {
  var searchInput = document.querySelector(".form-control").value;
  alert("검색어: " + searchInput);
});

// 상품 카드 렌더링하기
async function renderReviewCards() {
  try {
    const products = await fetchProducts();
    const productCardsContainer = document.getElementById(
      "productCardsContainer",
    );
    

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const imageUrl = `https://tqklhszfkvzk6518638.cdn.ntruss.com/product/${product.image}`;

      productCardsContainer.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img src="${imageUrl}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <a href="detail.html?id=${product.id}" class="btn btn-success">View Details</a>
            </div>
          </div>
        </div>
      `;
    }
  } catch (error) {
    console.error("에러 ---", error);
  }
}

// File을 Base64로 변환하는 함수
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// 이미지 확장자 추출 함수 정의
function getImageFileExtension(filename) {
  const matches = filename.match(/\.(jpg|jpeg|png|gif)$/i);
  if (!matches || matches.length < 2) {
    return 'jpeg'; // 기본적으로 jpeg 확장자를 반환하도록 수정
  }
  return matches[1].toLowerCase();
}

// 이미지 사이즈 조정
async function resizeImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const img = new Image();
      img.onload = async () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 100; // 원하는 폭으로 설정
        canvas.height = (100 * img.height) / img.width; // 종횡비 유지

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(async (blob) => {
          // 이미지 확장자에 따라 ContentType 변경
          const resizedFile = new File([blob], file.name, {
            type: `image/${getImageFileExtension(file.name)}`,
          });
          resolve(resizedFile);
        }, `image/${getImageFileExtension(file.name)}`);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// 편의점 리뷰 렌더링하기
async function renderReviewCards() {
  try {
    const reviews = await fetchReviews();
    const reviewCardsContainer = document.getElementById(
      "productCardsContainer",
    );

    // 기존 내용을 지우고 새로운 리뷰 카드를 추가할 요소 생성
    reviewCardsContainer.innerHTML = "";

    for (let i = 0; i < reviews.length; i++) {
      const review = reviews[i];
      const storeName = review.store ? review.store.name : "No Store Name";
      const userName = review.user ? review.user.name : "No User Name";

      function getStarRating(rating) {
        const stars = "⭐".repeat(rating);
        return stars || "No Rating";
      }

      // 새로운 리뷰 카드를 생성하고 추가
      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title" style="color: #198754;">${storeName}</h5>
            <p class="card-text">별점: ${getStarRating(review.rating)}</p>
            <p class="card-text">내용: ${review.comment}</p>
            <p class="card-text">글쓴이: ${userName}</p>
            <button class="btn btn-outline-primary" onclick="deleteReview(${
              review.id
            })">Delete</button>
            <button class="btn btn-success" onclick="editReview(${
              review.id
            })">Edit</button>
          </div>
        </div>`;

      // 이미지가 있는 경우 이미지 엘리먼트를 생성하고 추가
      if (review.image && review.image != "null") {
        const imgElement = document.createElement("img");
        imgElement.src = review.image;
        imgElement.alt = storeName;
        imgElement.className = "card-img-top";
        card.querySelector(".card-body").prepend(imgElement);

        // 이미지 크기를 조절
        imgElement.style.maxHeight = "100px";
        imgElement.style.maxWidth = "100px";
      }

      reviewCardsContainer.appendChild(card);
    }
  } catch (error) {
    console.error("에러 ---", error);
  }
}

// 리뷰 삭제
async function deleteReview(reviewId) {
  try {
    const response = await fetch(`/api/store-reviews/${reviewId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.ok) {
      const result = await response.json();
      // 삭제 후 페이지 갱신
      location.reload();
    } else if (response.status === 403) {
      // 권한이 없는 경우 알림 표시
      alert("삭제할 권한이 없습니다.");
    } else {
      alert("로그인이 필요합니다.");
      console.error(
        "Error deleting review:",
        response.status,
        response.statusText,
      );
    }
  } catch (error) {
    console.error("Error deleting review:", error);
  }
}

// editReview 함수
async function editReview(reviewId) {
  try {
    const response = await fetch(`/api/store-reviews/${reviewId}`, {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      // Server returned a 200 OK response, proceed with editing
      window.location.href = `./modifyReview.html?id=${reviewId}`;
    } else if (response.status === 403) {
      // User does not have permission
      alert("수정할 권한이 없습니다.");
    } else {
      // Other error scenarios
      alert("로그인이 필요합니다.");
      console.error(
        "Error fetching review:",
        response.status,
        response.statusText,
      );
    }
  } catch (error) {
    console.error("Error fetching review:", error);
  }
}

// 이미지를 업로드하고 URL을 반환하는 함수
async function uploadImageAndGetUrl(file) {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch(`/api/store-reviews/upload`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Image upload successful:", data.url);
      return data.url;
    } else {
      console.error("Error uploading image:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
}
// 페이지 로드 시 자동으로 상품 카드 렌더링 함수 호출
window.onload = renderReviewCards;
