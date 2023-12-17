// 배달 완료 버튼 클릭 시 주문 상태 변경
async function processOrder(orderId) {
  try {
    const response = await fetch(`/api/takeorder/owner/process/${orderId}`, {
      method: "PUT",
      credentials: "include",
    });

    if (response.ok) {
      alert("배송완료 되었습니다");
      window.location.reload();
      await displayOwnerOrders();
    } else {
      throw new Error("주문 처리 중 오류 발생");
    }
  } catch (error) {
    alert("주문 처리 중 오류 발생");
    throw error;
  }
}

// 주문 취소 버튼 클릭 시 주문 상태 변경
async function cancelOrder(orderId) {
  try {
    const response = await fetch(`/api/takeorder/owner/cancel/${orderId}`, {
      method: "PUT",
      credentials: "include",
    });

    if (response.ok) {
      alert("주문이 성공적으로 취소되었습니다.");
      await displayOwnerOrders();
    } else {
      throw new Error("주문 취소 중 오류 발생");
    }
  } catch (error) {
    alert("주문 처리 중 오류 발생");
    throw error;
  }
}

async function displayOrderDetails(order) {
  try {
    function formatDateTime(dateTimeString) {
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      };
      return new Date(dateTimeString).toLocaleString("ko-KR", options);
    }

    const orderDetailsContainer = document.getElementById("orderDetails");
    orderDetailsContainer.innerHTML = `
        <h5 class="modal-title">주문 ID: ${order.orderId}</h5>
        <p>책 제목: ${order.product.name}</p>
        <p>작가: ${order.product.author}</p>
        <p>가격: ${order.product.price}원</p>
        <p>주문 상태: ${order.status}</p>
        <p>배송 주소: ${order.address}</p>
        <p>주문일시: ${formatDateTime(order.createdAt)}</p>
        <p>배송완료일시: ${formatDateTime(order.updatedAt)}</p>
      `;

    const closeOrderDetailsBtn = document.getElementById("closeOrderDetails");
    closeOrderDetailsBtn.addEventListener("click", () => {
      orderDetailsContainer.innerHTML = "";
      document.getElementById("orderDetailsContainer").style.display = "none";
    });

    document.getElementById("orderDetailsContainer").style.display = "block";
  } catch (error) {
    console.error("주문 상세 정보 표시 중 오류 발생:", error);
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
      throw new Error("Error getting user ID");
    }
  } catch (error) {
    throw error;
  }
}

async function checkLoggedInUserType() {
  try {
    const response = await fetch(`/api/users/me`, {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      return data.data.userType;
    } else {
      throw new Error("Error checking login status");
    }
  } catch (error) {
    throw error;
  }
}

async function getOwnerOrders() {
  try {
    const response = await fetch(`/api/order/client`, {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error checking order");
    }
  } catch (error) {
    throw error;
  }
}

async function displayOwnerOrders() {
  try {
    const orders = await getOwnerOrders();
    const ordersListContainer = document.getElementById("ownerOrdersList");
    ordersListContainer.innerHTML = "";

    if (orders && Array.isArray(orders.data)) {
      orders.data.forEach(function (order) {
        var listItem = document.createElement("li");
        listItem.className = "list-group-item";

        listItem.textContent = `주문 ID: ${order.orderId} - 상태: ${order.status} `;

        listItem.addEventListener("click", function () {
          displayOrderDetails(order);
        });

        ordersListContainer.appendChild(listItem);
      });
    } else {
      var listItem = document.createElement("li");
      listItem.className = "list-group-item";
      listItem.textContent = "주문이 없습니다.";
      ordersListContainer.appendChild(listItem);
    }
  } catch (error) {
    console.error("주문 목록 표시 오류:", error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await displayOwnerOrders();
});
