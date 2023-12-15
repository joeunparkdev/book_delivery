import ProductsController from "../controllers/products.controller.js";
import { prisma } from "../utils/prisma/index.js";

export class CustomerOrderProductRepository {
  orderProductByUser = async (existUser, existProduct, address, points) => {
    const [users, orders] = await prisma.$transaction([
      prisma.users.update({
        where: {
          userId: existUser.userId,
        },
        data: {
          points: points,
        },
      }),
      prisma.orders.create({
        data: {
          userId: existUser.userId,
          productId: existProduct.productId,
          address: address,
          status: "주문완료",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
    ]);

    return { users, orders };
  };
}
