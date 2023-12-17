import { prisma } from "../utils/prisma/index.js";

export class CartRepository {
  getCart = async (userId) => {
    const carts = await prisma.carts.findMany({
      where: { userId: +userId },
      select: {
        productId: true,
      },
    });

    const result = await Promise.all(
      carts.map(async (cartItem) => {
        const product = await prisma.products.findUnique({
          where: { productId: cartItem.productId },
          select: {
            name: true,
            price: true,
            imageUrl: true,
          },
        });

        return {
          productId: cartItem?.productId,
          price: product?.price,
          name: product?.name,
          imageUrl: product?.imageUrl,
        };
      }),
    );

    return result;
  };

  findItem = async (userId, productId) => {
    const findItem = await prisma.carts.findFirst({
      where: { userId: +userId, productId: productId },
      select: { cartId: true },
    });

    return findItem;
  };

  createCart = async (userId, productId) => {
    const createCart = await prisma.carts.create({
      data: {
        userId: +userId,
        productId: +productId,
      },
    });
    return createCart;
  };

  // updateCart = async (cartId) => {
  //   const updateCart = await prisma.carts.update({
  //     where: { cartId: +cartId },
  //     data: {
  //       quantity: +quantity,
  //     },
  //   });

  //   return updateCart;
  // };

  deleteCart = async (cartId) => {
    await prisma.carts.delete({
      where: {
        cartId: +cartId,
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
