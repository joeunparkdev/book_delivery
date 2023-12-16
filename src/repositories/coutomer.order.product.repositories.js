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
      const [updatedUser, orderWithProducts] = await prisma.$transaction([
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

      return [updatedUser, orderWithProducts]
    } catch (error) {
      console.error('주문 처리 중 오류 발생:', error)
      throw new Error('주문 처리 중 오류가 발생했습니다.')
    }
  }

  findOrderByProductId = async (productId) => {
    try {
      const orders = await prisma.orders.findMany({
        where: {
          productId: +productId,
        },
      })

      if (orders.length >= 1) {
        throw new Error('sold-out된 물건입니다.')
      }

      return
    } catch (error) {
      throw new Error(error)
    }
  }

  getClientOrder = async (userId) => {
    try {
      const order = await prisma.orders.findMany({
        where: {
          userId: +userId,
        },
      })

      return order
    } catch (error) {
      throw new Error('주문 조회 중 오류가 발생했습니다.')
    }
  }

  findOrderByOrderId = async (orderId) => {
    try {
      console.log(orderId)
      const order = await prisma.orders.findFirst({
        where: {
          orderId: +orderId,
        },
      })

      return order
    } catch (error) {
      throw new Error('주문 조회 중 오류가 발생했습니다.')
    }
  }

  clientCancelOrder = async (orderId) => {
    try {
      const order = await prisma.orders.delete({
        where: {
          orderId: +orderId,
        },
      })

      return order
    } catch (error) {
      throw new Error('주문 조회 중 오류가 발생했습니다.')
    }
  }
  clearOrder = async (orderId) => {
    try {
      const order = await prisma.orders.delete({
        where: {
          orderId: +orderId,
        },
      })

      return order
    } catch (error) {
      throw new Error('주문 조회 중 오류가 발생했습니다.')
    }
  }
}
