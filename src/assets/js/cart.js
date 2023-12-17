const itemBox = document.querySelector(".Cart-ItemBox");

// 서버에서 데이터 가져오기
async function fetchCart() {
  try {
    const response = await fetch(`/api/cart`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("에러 ---", error);
    throw error;
  }
}

async function cartGet() {
  try {
    const cartData = await fetchCart();

    const totalAmount = document.querySelector(".total-amount");
    const totalItems = document.querySelector(".items");

    let totalPrice = 0;

    itemBox.innerHTML = "";

    const { data } = cartData;

    for (let i = 0; i < data.carts.length; i++) {
      const cart = data.carts[i];
      const imageUrl = `https://tqklhszfkvzk6518638.cdn.ntruss.com/product/${cart.imageUrl}`;

      const productNum = cart.price;
      const amount = parseInt(productNum);

      totalPrice += amount;

      const cartItem = document.createElement("div");
      cartItem.className = "Cart-Items";

      cartItem.innerHTML = `
        <div class="image-box">
          <img src="${imageUrl}" style="height: 120px" />
        </div>
        <div class="about">
          <div class="title">${cart.name}</div>
        </div>
        <div class="prices">
          <div class="amount">${amount}원</div>
          <div class="remove"><u>Remove</u></div>
        </div>
      `;

      itemBox.appendChild(cartItem);
    }

    totalAmount.innerText = `${totalPrice} 원`;
    totalItems.innerText = `total items ${data.carts.length}`;

    const deleteProducts = document.querySelectorAll(".remove");

    deleteProducts.forEach((deleteProduct, index) => {
      deleteProduct.addEventListener("click", async () => {
        try {
          const response = await fetch(`/api/cart`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productId: data.carts[index].productId,
            }),
            credentials: "include",
          });
          cartGet();
        } catch (error) {
          console.error("에러 ---", error);
          throw error;
        }
      });
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

const removeAllBtn = document.querySelector(".removeAll");

async function deleteAllCart() {
  try {
    const response = await fetch(`/api/cart/all`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();

    cartGet();

    console.log("Cart updated successfully:", data);
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
}

removeAllBtn.addEventListener("click", deleteAllCart);

window.onload = cartGet;
