import { prisma } from '../utils/prisma/index.js'

export class OwnerOrderRepository {
  // GetOwnerOrder
  GetOwnerOrder = async (ownerId) => {
    const orders = await prisma.orders.findMany({
      where: { ownerId: +ownerId },
    })

    return orders
  }

  // GetOrderByOrderId
  GetOrderByOrderId = async (orderId) => {
    console.log(orderId)
    const order = await prisma.orders.findFirst({
      where: { orderId: +orderId },
    })

    console.log(order)
    return order
  }

  // ProcessOrder
  ProcessOrder = async (orderId) => {
    try {
      const order = await prisma.orders.update({
        where: {
          orderId: +orderId,
        },
        data: {
          status: '배송 완료',
          updatedAt: new Date(),
        },
      })

      return [order]
    } catch (error) {
      console.error('주문 처리 중 오류 발생:', error)
      throw new Error('주문 처리 중 오류가 발생했습니다.')
    }
  }

  // CancelOrder
  CancelOrder = async (orderId, userId, points) => {
    try {
      const [updatedUser, updatedOrder] = await prisma.$transaction([
        prisma.users.update({
          where: {
            userId: +userId,
          },
          data: {
            points: +points,
          },
        }),
        prisma.orders.update({
          where: {
            orderId: +orderId,
          },
          data: {
            status: '주문 취소',
            updatedAt: new Date(),
          },
        }),
      ])

      return [updatedUser, updatedOrder]
    } catch (error) {
      console.error('주문 처리 중 오류 발생:', error)
      throw new Error('주문 처리 중 오류가 발생했습니다.')
    }
  }
}
