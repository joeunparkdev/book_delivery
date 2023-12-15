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
  ) => {
    try {
      const [updatedUser, createdOrder] = await prisma.$transaction([
        prisma.users.update({
          where: {
            userId: +userId,
          },
          data: {
            points: +points,
          },
        }),
        prisma.orders.create({
          data: {
            userId,
            userName,
            productId: +productId,
            address,
            ownerId,
            bookstoreId,
            status: '주문완료',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        }),
      ])

      return [updatedUser, createdOrder]
    } catch (error) {
      console.error('주문 처리 중 오류 발생:', error)
      throw new Error('주문 처리 중 오류가 발생했습니다.')
    }
  }
}
