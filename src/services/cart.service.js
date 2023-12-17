import { CartRepository } from "../repositories/cart.repository.js";

export class CartService {
  cartRepository = new CartRepository();

  getCart = async (userId) => {
    const carts = await this.cartRepository.getCart(userId);

    return carts.map((cart) => {
      return {
        productId: cart.productId,
        price: cart.price,
        name: cart.name,
        imageUrl: cart.imageUrl,
      };
    });
  };

  createCart = async (userId, productId) => {
    if (!userId) {
      throw new Error("로그인이 필요합니다");
    }

    const findItem = await this.cartRepository.findItem(userId, productId);
    if (!findItem) {
      const createCart = await this.cartRepository.createCart(
        userId,
        productId,
      );

      return createCart;
    } else {
      throw new Error("이미 장바구니에 있는 상품입니다");
    }
  };

  // updateCart = async (userId, productId) => {
  //   const findItem = await this.cartRepository.findItem(userId, productId);
  //   if (!userId) {
  //     throw new Error("로그인이 필요합니다");
  //   }

  //   if (!findItem) {
  //     throw new Error("상품을 찾을 수 없습니다");
  //   }

  //   const updateCart = this.cartRepository.updateCart(findItem.cartId);

  //   return updateCart;
  // };

  deleteCart = async (userId, productId) => {
    const findItem = await this.cartRepository.findItem(userId, productId);

    if (!findItem) {
      throw new Error("상품을 찾을 수 없습니다");
    }

    await this.cartRepository.deleteCart(findItem.cartId);
  };

  deleteAllCart = async (userId) => {
    await this.cartRepository.deleteAllCart(userId);
  };
}
