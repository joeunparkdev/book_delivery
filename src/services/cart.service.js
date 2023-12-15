import { CartRepository } from "../repositories/cart.repository.js";

export class CartService {
  cartRepository = new CartRepository();

  getCart = async (userId) => {
    const carts = await this.cartRepository.getCart(userId);

    return carts.map((cart) => {
      return {
        price: cart.price,
        name: cart.name,
        image: cart.image,
        quantity: cart.quantity,
      };
    });
  };

  createCart = async (userId, productId, quantity) => {
    if (!userId) {
      throw new Error("로그인이 필요합니다");
    }

    const findItem = await this.cartService.findItem(userId, productId);
    if (!findItem) {
      const createCart = await this.cartRepository.createCart(
        userId,
        productId,
        quantity,
      );

      return createCart;
    } else {
      const updateCart = await this.cartService.updateCart(
        userId,
        productId,
        quantity,
        findItem.quantity,
      );
      return updateCart;
    }
  };

  updateCart = async (userId, productId, quantity) => {
    const findItem = await this.cartService.findItem(userId, productId);
    if (!userId) {
      throw new Error("로그인이 필요합니다");
    }

    if (!findItem) {
      throw new Error("상품을 찾을 수 없습니다");
    }

    const updateCart = this.cartRepository.updateCart(
      userId,
      productId,
      quantity,
      findItem.quantity,
    );

    return updateCart;
  };

  deleteCart = async (userId, productId) => {
    const findItem = await this.cartRepository.findItem(userId, productId);

    if (!findItem) {
      throw new Error("상품을 찾을 수 없습니다");
    }

    if (findItem.userId !== userId) {
      throw new Error("해당 상품을 삭제할 권한이 없습니다.");
    }

    await this.cartRepository.deleteCart(userId, productId);
  };

  deleteAllCart = async (userId) => {
    await this.cartRepository.deleteAllCart(userId);
  };
}
