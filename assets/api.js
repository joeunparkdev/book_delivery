// const socket = io.connect("/");

// socket.on("BUY_products", function (data) {
//   const { nickname, productsId, productsName, date } = data;
//   makeBuyNotification(nickname, productsName, productsId, date);
// });

function initAuthenticatePage() {
  // socket.emit("CHANGED_PAGE", `${location.pathname}${location.search}`);
}

function bindSamePageViewerCountEvent(callback) {
  // socket.on("SAME_PAGE_VIEWER_COUNT", callback);
}

function postOrder(user, order) {
  if (!order.length) {
    return;
  }

  // socket.emit("BUY", {
  //   nickname: user.nickname,
  //   productsId: order[0].products.productsId,
  //   productsName:
  //     order.length > 1
  //       ? `${order[0].products.name} 외 ${order.length - 1}개의 상품`
  //       : order[0].products.name,
  // });
}

function getSelf(callback) {
  // 1. 로컬 스토리지에서 토큰 가져오기
  const token = localStorage.getItem("token");

  // 2. 토큰이 없을 경우 로그인 필요 알림 등의 처리
  if (!token) {
    alert("로그인이 필요합니다.");
    window.location.href = "/"; // 로그인 페이지로 이동
    return;
  }

  // 3. 서버에 사용자 정보 요청
  $.ajax({
    type: "GET",
    url: "/api/users/me",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    success: function (response) {
      callback(response);
    },
    error: function (error) {
      console.error("에러:", error);
      if (error.status === 404) {
        alert("서버에서 사용자 정보를 찾을 수 없습니다.");
      } else {
        customAlert(error.responseJSON.errorMessage);
      }
    },
  });
}

$.ajax({
  type: "POST",
  url: "/api/auth/login",
  data: {
    // your login data
  },
  success: function (response) {
    localStorage.setItem("token", response.accessToken);
    window.location.replace("/products.html");
  },
  error: function (error) {
    console.error("에러:", error);

    if (error.status === 404) {
      console.error("서버에서 로그인 엔드포인트를 찾을 수 없습니다.", error);
      alert("서버에서 로그인 엔드포인트를 찾을 수 없습니다.");
    } else {
      console.error("서버에서 오류 응답을 받았습니다.", error);
      customAlert(error.responseJSON.errorMessage);
    }
  },
});


function getproducts(category, callback) {
  $("#productsList").empty();
  $.ajax({
    type: "GET",
    url: `/api/products${category ? "?category=" + category : ""}`,
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    success: function (response) {
      callback(response["products"]);
    },
  });
}

function signOut() {
  localStorage.clear();
  window.location.href = "/";
}

function getproductsDetail(productsId, callback) {
  $.ajax({
    type: "GET",
    url: `/api/products/${productsId}`,
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    error: function (xhr, status, error) {
      if (status == 401) {
        alert("로그인이 필요합니다.");
      } else if (status == 404) {
        alert("존재하지 않는 상품입니다.");
      } else {
        alert("알 수 없는 문제가 발생했습니다. 관리자에게 문의하세요.");
      }
      window.location.href = "/products";
    },
    success: function (response) {
      callback(response.products);
    },
  });
}

function makeBuyNotification(targetNickname, productsName, productsId, date) {
  const messageHtml = `${targetNickname}님이 방금 <a href="/detail.html?productsId=${productsId}" class="alert-link">${productsName}</a>을 구매했어요! <br /><small>(${date})</small>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>`;
  const alt = $("#customerAlert");
  if (alt.length) {
    alt.html(messageHtml);
  } else {
    const htmlTemp = `<div class="alert alert-sparta alert-dismissible show fade" role="alert" id="customerAlert">${messageHtml}</div>`;
    $("body").append(htmlTemp);
  }
}

function addToCart(productsId, quantity, callback) {
  $.ajax({
    type: "PUT",
    url: `/api/products/${productsId}/cart`,
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      quantity,
    },
    error: function (xhr, status, error) {
      if (status == 400) {
        alert("존재하지 않는 상품입니다.");
      }
      window.location.href = "/products.html";
    },
    success: function () {
      callback();
    },
  });
}

function buyLocation(params) {
  sessionStorage.setItem("ordered", JSON.stringify(params));
  location.href = "order.html";
}

function getCarts(callback) {
  $.ajax({
    type: "GET",
    url: `/api/products/cart`,
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    success: function (response) {
      callback(response.cart);
    },
  });
}

function deleteCart(productsId, callback) {
  $.ajax({
    type: "DELETE",
    url: `/api/products/${productsId}/cart`,
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    success: function () {
      callback();
    },
  });
}
