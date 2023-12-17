// 주소 적는곳
const address = document.querySelector(".address");

// 회원 정보
const customerName = document.querySelector(".customerName");
const customerEmail = document.querySelector(".customerEmail");

async function getCustomerInfo() {
  try {
    const response = await fetch(`/api/users/me`, {
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
let loadedCartData;
async function loadPage() {
  try {
    const getCustomer = await getCustomerInfo();

    console.log(getCustomer);

    customerName.value = getCustomer.data.username;
    customerEmail.value = getCustomer.data.email;

    let totalPrice = 0;

    // 장바구니 내용
    const itemBox = document.querySelector(".Cart-ItemBox");

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

    const cartData = await fetchCart();
    loadedCartData = cartData;

    const totalAmount = document.querySelector(".total-amount");

    itemBox.innerHTML = "";

    const { data } = cartData;

    for (let i = 0; i < data.carts.length; i++) {
      const cart = data.carts[i];
      const imageUrl = `${cart.imageUrl}`;

      const productNum = cart.price;
      const amount = parseInt(productNum);

      totalPrice += amount;

      const cartItem = document.createElement("div");
      cartItem.className = "Cart-Items";

      cartItem.innerHTML = `
           <ul class="cartWarpprer">
           <li class="item">
             <div class="imgBox"> 
               <img class="imgItem" src="${imageUrl}"></img>
             </div>
               <div class="itemInfor">
                 <span>${cart.name}</span>
                 <span>${amount}원</span>
               </div>
               <div class="remove btn btn-success me-2"><u>Remove</u></div>
           </li>
         </ul>
         `;

      itemBox.appendChild(cartItem);
    }

    totalAmount.innerText = `${totalPrice} 원`;

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
          loadPage();
        } catch (error) {
          console.error("에러 ---", error);
          throw error;
        }
      });
    });

    // 포인트 차감내용
    const myPoint = document.querySelector(".myPoint");
    const resultPoint = document.querySelector(".resultPoint");

    myPoint.innerHTML = `${getCustomer.data.points} 원`;
    resultPoint.innerHTML = `${getCustomer.data.points - totalPrice} 원`;

    return data.carts;
  } catch (err) {
    console.error(err);
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

    loadPage();

    console.log("Cart updated successfully:", data);
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
}

async function order(address, productId) {
  try {
    const response = await fetch(`/api/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ address, productId }),
    });

    const data = await response.json();
    console.log(data);
    if (!data.errorMessage) {
      alert("구매 성공하셨습니다.");
      window.location.href = "main.html";
    } else {
      // 주문 실패한 경우에 대한 알림 표시
      alert(`구매 실패: ${data.errorMessage}`);
    }
  } catch (error) {
    console.error("에러 ---", error);
    throw error;
  }
}

// 완료버튼
orderBtn.addEventListener("click", async () => {
  try {
    if (loadedCartData) {
      for (let i = 0; i < loadedCartData.data.carts.length; i++) {
        const productId = loadedCartData.data.carts[i].productId;
        await order(address.value, productId);
      }
      // 주문 완료 후 장바구니 비우기
      await deleteAllCart();
      alert("구매가 완료되었습니다.");
      window.location.href = "main.html";
    } else {
      console.error("장바구니 데이터를 불러오는 데 실패했습니다.");
    }
  } catch (error) {
    console.error("에러 ---", error);
  }
});

window.onload = loadPage;
