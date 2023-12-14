
const itemBox = document.querySelector('.Cart-ItemBox');

// 서버에서 데이터 가져오기
async function fetchCart() {
  try {
    const response = await fetch(`/api/cart`, {
      method: 'GET',
      credentials: 'include',
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('에러 ---', error);
    throw error;
  }
}

async function cartGet() {
  try {
    const data = await fetchCart();

    const totalAmount = document.querySelector('.total-amount');
    const totalItems = document.querySelector('.items');

    let totalPrice = 0;

    itemBox.innerHTML = '';

    const { carts, products } = data;

    for (let i = 0; i < carts.length; i++) {
      const cart = carts[i];
      const product = products[i];
      const imageUrl = `https://tqklhszfkvzk6518638.cdn.ntruss.com/product/${product.image}`;

      const productNum = product.price.replace(',', '');
      const amount = parseInt(productNum) * cart.quantity;

      totalPrice += amount;

      const cartItem = document.createElement('div');
      cartItem.className = 'Cart-Items';

      cartItem.innerHTML = `
        <div class="image-box">
          <img src="${imageUrl}" style="height: 120px" />
        </div>
        <div class="about">
          <div class="title">${product.name}</div>
        </div>
        <div class="counter">
          <div class="btn minus" data-index="${i}">-</div>
          <div class="count">${cart.quantity}</div>
          <div class="btn plus" data-index="${i}">+</div>
        </div>
        <div class="prices">
          <div class="amount">${amount}원</div>
          <div class="remove"><u>Remove</u></div>
        </div>
      `;

      itemBox.appendChild(cartItem);
    }

    totalAmount.innerText = `${totalPrice} 원`;
    totalItems.innerText = `total items ${carts.length}`;

    const plusButtons = document.querySelectorAll('.btn.plus');
    const minusButtons = document.querySelectorAll('.btn.minus');

    plusButtons.forEach((plusButton) => {
      plusButton.addEventListener('click', handleQuantityChange);
    });

    minusButtons.forEach((minusButton) => {
      minusButton.addEventListener('click', handleQuantityChange);
    });

    const deleteProducts = document.querySelectorAll('.remove');

    deleteProducts.forEach((deleteProduct, index) => {
      deleteProduct.addEventListener('click', async () => {
        try {
          const response = await fetch(`/api/cart`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              productId: carts[index].productId,
            }),
            credentials: 'include',
          });
          cartGet();
        } catch (error) {
          console.error('에러 ---', error);
          throw error;
        }
      });
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

const removeAllBtn = document.querySelector('.removeAll');

async function deleteAllCart() {
  try {
    const response = await fetch(`/api/cart/all`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const data = await response.json();

    cartGet();

    console.log('Cart updated successfully:', data);
  } catch (error) {
    console.error('Error updating cart:', error);
    throw error;
  }
}

removeAllBtn.addEventListener('click', deleteAllCart);

async function updateCart(cartItems) {
  try {
    const response = await fetch(`/api/cart`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        id: cartItems.id,
        quantity: cartItems.quantity,
      }),
    });
    const data = await response.json();

    console.log('Cart updated successfully:', data);
  } catch (error) {
    console.error('Error updating cart:', error);
    throw error;
  }
}

// + 또는 - 버튼이 클릭되었을 때 호출되는 함수
async function handleQuantityChange(event) {
  // 클릭된 버튼의 인덱스 가져오기
  const index = event.target.getAttribute('data-index');

  try {
    // 서버에서 현재 장바구니 정보 가져오기
    const cartData = await fetchCart();
    const { carts } = cartData;

    // 해당 아이템의 수량 찾기
    const item = carts[index];

    if (item) {
      // 증가 또는 감소 버튼에 따라 수량 업데이트
      if (event.target.classList.contains('plus')) {
        item.quantity += 1;
      } else if (event.target.classList.contains('minus')) {
        // 최소 수량이 1 이상이어야 함
        if (item.quantity > 1) {
          item.quantity -= 1;
        }
      }

      // 서버에 업데이트된 장바구니 정보 전송
      await updateCart(item);

      await cartGet();
    }
  } catch (error) {
    console.error('에러 ---', error);
    throw error;
  }
}

window.onload = cartGet;
