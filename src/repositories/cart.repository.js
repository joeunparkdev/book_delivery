import { prisma } from "../utils/prisma/index.js";

export class CartRepository {
  getCart = async (userId) => {
    const carts = await prisma.carts.findMany({
      where: { userId: +userId },
      select: {
        productId: true,
        quantity: true,
      },
    });

    await carts.map(async (cartItem) => {
      const product = await prisma.products.findByPk(cartItem.productId, {
        select: {
          name: true,
          price: true,
          image: true,
        },
      });

      return {
        price: product.price,
        name: product.name,
        image: product.image,
        quantity: cartItem.quantity,
      };
    });
  };

  findItem = async (userId, productId) => {
    const findItem = await prisma.carts.findUnique({
      where: { userId: +userId, productId: +productId },
      select: { quantity: true },
    });

    return findItem;
  };

  createCart = async (userId, productId, quantity) => {
    const createCart = await prisma.carts.create({
      data: {
        userId: +userId,
        productId: +productId,
        quantity: +quantity,
      },
    });
    return createCart;
  };

  updateCart = async (userId, productId, quantity, existquantity) => {
    const updateCart = await prisma.carts.update({
      where: { userId: +userId, productId: +productId },
      data: {
        quantity: quantity + (existquantity || 0),
      },
    });

    return updateCart;
  };

  deleteCart = async (userId, productId) => {
    await prisma.products.delete({
      where: {
        productId: +productId,
        userId: +userId,
      },
    });
  };

  deleteAllCart = async (userId) => {
    await prisma.carts.deleteMany({
      where: {
        userId: +userId,
      },
    });
  };
}
