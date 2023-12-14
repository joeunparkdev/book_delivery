async function createReview() {
  try {
    const response = await fetch(`/api/users`, {
      method: 'GET',
      credentials: "include",
    });
 
    if (response.ok) {
      const data = await response.json();
      window.location.href = './storeReviews.html';
      return true;
    } else {
      console.error('Error uploading image:', response.statusText);
      alert('로그인이 필요합니다.');
      return false;
    }
  } catch (error) {
    console.error('Error uploading image:', error);
    alert('로그인이 필요합니다.');
    return false;
  }
}

async function checkLoginStatus() {

  // 서버에 내정보 요청 보냄
  try {
   const response = await fetch(`/api/users`, {
     method: 'GET',
     credentials: "include",
   });

   if (response.ok) {
     const data = await response.json();
     return true;
   } else {
     console.error('Error uploading image:', response.statusText);
     return false;
   }
 } catch (error) {
   console.error('Error uploading image:', error);
   return false;
 }
}

async function fetchReviews() {
  try {
    const response = await fetch(`/api/store-reviews`);
    if (!response.ok) {
      throw new Error('서버 응답이 실패하였습니다.');
    }

    const data = await response.json();
    console.log('Response Data:', data);
    return data.reviews;
  } catch (error) {
    console.error('에러 ---', error);
    throw error;
  }
}

// 편의점 리뷰 렌더링하기
async function renderReviewCards() {
  try {
    const reviews = await fetchReviews();
    const reviewCardsContainer = document.getElementById(
      'productCardsContainer',
    );

    // 기존 내용을 지우고 새로운 리뷰 카드를 추가할 요소 생성
    reviewCardsContainer.innerHTML = '';

    for (let i = 0; i < reviews.length; i++) {
      const review = reviews[i];
      const storeName = review.store ? review.store.name : 'No Store Name';
      const userName = review.user ? review.user.name : 'No User Name';

      function getStarRating(rating) {
        const stars = '⭐'.repeat(rating);
        return stars || 'No Rating';
      }

      // 새로운 리뷰 카드를 생성하고 추가
      const card = document.createElement('div');
      card.className = 'col';
      card.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title" style="color: #0D6EFD;">${storeName}</h5>
            <p class="card-text">별점: ${getStarRating(review.rating)}</p>
            <p class="card-text">내용: ${review.comment}</p>
            <p class="card-text">글쓴이: ${userName}</p>
            <button class="btn btn-outline-primary" onclick="deleteReview(${
              review.id
            })">Delete</button>
            <button class="btn btn-primary" onclick="editReview(${
              review.id
            })">Edit</button>
          </div>
        </div>`;

      // 이미지가 있는 경우 이미지 엘리먼트를 생성하고 추가
      if (review.image && review.image != "null") {
        const imgElement = document.createElement('img');
        imgElement.src = review.image;
        imgElement.alt = storeName;
        imgElement.className = 'card-img-top';
        card.querySelector('.card-body').prepend(imgElement);

        // 이미지 크기를 조절
        imgElement.style.maxHeight = '100px';
        imgElement.style.maxWidth = '100px';
      }

      reviewCardsContainer.appendChild(card);
    }
  } catch (error) {
    console.error('에러 ---', error);
  }
}

// 리뷰 삭제
async function deleteReview(reviewId) {
  try {
    const response = await fetch(`/api/store-reviews/${reviewId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
    });

    if (response.ok) {
      const result = await response.json();
      // 삭제 후 페이지 갱신
      location.reload();
    } else if (response.status === 403) {
      // 권한이 없는 경우 알림 표시
      alert('삭제할 권한이 없습니다.');
    } else {
          alert('로그인이 필요합니다.');
      console.error(
        'Error deleting review:',
        response.status,
        response.statusText,
      );
    }
  } catch (error) {
    console.error('Error deleting review:', error);
  }
}

// editReview 함수
async function editReview(reviewId) {
  try {
    const response = await fetch(`/api/store-reviews/${reviewId}`, {
      method: 'GET',
      credentials: 'include',
    });

    if (response.ok) {
      // Server returned a 200 OK response, proceed with editing
      window.location.href = `./modifyReview.html?id=${reviewId}`;
    } else if (response.status === 403) {
      // User does not have permission
      alert('수정할 권한이 없습니다.');
    } else {
      // Other error scenarios
      alert('로그인이 필요합니다.');
      console.error('Error fetching review:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error fetching review:', error);
  }
}

// 이미지를 업로드하고 URL을 반환하는 함수
async function uploadImageAndGetUrl(file) {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch(
      `/api/store-reviews/upload`,
      {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    if (response.ok) {
      const data = await response.json();
      console.log('Image upload successful:', data.url);
      return data.url;
    } else {
      console.error('Error uploading image:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}

// 페이지 로드 시 자동으로 리뷰 카드 렌더링 함수 호출
window.onload = renderReviewCards;
