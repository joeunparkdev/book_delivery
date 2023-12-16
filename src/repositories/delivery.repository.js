import { prisma } from '../utils/prisma/index.js'

export class DeliveryRepository {
  dieliverSystem = async (orderId) => {
    try {
      const updatedOrder = await prisma.orders.update({
        where: {
          orderId: +orderId,
        },
        data: {
          status: '배송 완료',
        },
      })
      return updatedOrder
    } catch (error) {
      throw error
    }
  }
}
