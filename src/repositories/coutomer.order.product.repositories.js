import ProductsController from '../controllers/products.controller.js'
import { prisma } from '../utils/prisma/index.js'

export class CustomerOrderProductRepository {
  orderProductByUser = async (
    points,
    userId,
    userName,
    productId,
    address,
    ownerId,
    bookstoreId,
    bookStoreName,
  ) => {
    const [updatedUser, createdOrder] = await prisma.$transaction([
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
          userId,
          userName,
          productId,
          address,
          ownerId,
          bookstoreId,
          bookStoreName,
          status: '주문완료',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
    ])

    return [updatedUser, createdOrder]
  }
}
