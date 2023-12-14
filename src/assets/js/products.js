async function fetchProducts() {
  try {
    const response = await fetch(`/api/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('에러 ---', error);
    throw error;
  }
}


// 상품 카드 렌더링하기
async function renderReviewCards() {
  try {

    const products = await fetchProducts();
    const productCardsContainer = document.getElementById(
      'productCardsContainer',
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
              <a href="detail.html?id=${product.id}" class="btn btn-primary">View Details</a>
            </div>
          </div>
        </div>
      `;
    }
  } catch (error) {
    console.error('에러 ---', error);
  }
}

// 페이지 로드 시 자동으로 상품 카드 렌더링 함수 호출
window.onload = renderReviewCards;
