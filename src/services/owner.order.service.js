import { OwnerOrderRepository } from '../repositories/owner.order.repository.js'
import { ProductsRepository } from '../repositories/products.repository.js'
import { UsersRepository } from '../repositories/users.repository.js'

export class OwnerOrderService {
  ownerOrderRepository = new OwnerOrderRepository()
  productsRepository = new ProductsRepository()
  usersRepository = new UsersRepository()

  GetOwnerOrder = async (ownerId) => {
    try {
      const order = await this.ownerOrderRepository.GetOwnerOrder(ownerId)

      if (!order) {
        throw new Error('주문을 찾을 수 없습니다.')
      }

      const orderWithProducts = await Promise.all(
        order.map(async (order) => {
          const product = await this.productsRepository.findProductById(
            order.productId,
          )

          return {
            ...order,
            product,
          }
        }),
      )
      console.log(orderWithProducts)

      return orderWithProducts
    } catch (err) {
      throw err // 에러를 상위 핸들러로 전파합니다.
    }
  }
  GetOrderByOrderId = async (orderId) => {
    try {
      const order = await this.ownerOrderRepository.GetOrderByOrderId(orderId)
      console.log(order)

      const orderWithProducts = await this.productsRepository.findProductById(
        order.productId,
      )

      return {
        ...order,
        product: orderWithProducts,
      }
    } catch (err) {
      throw err
    }
  }

  ProcessOrder = async (orderId) => {
    try {
      const order = await this.ownerOrderRepository.GetOrderByOrderId(orderId)

      if (!order) {
        throw new Error('주문을 찾을 수 없습니다.')
      }

      const processedOrder =
        await this.ownerOrderRepository.ProcessOrder(orderId)

      return processedOrder
    } catch (err) {
      throw err // 에러를 상위 핸들러로 전파합니다.
    }
  }

  CancelOrder = async (orderId) => {
    try {
      const order = await this.ownerOrderRepository.GetOrderByOrderId(orderId)

      if (!order) {
        throw new Error('주문을 찾을 수 없습니다.')
      }

      const userId = order.userId
      const productId = order.productId

      const user = await this.usersRepository.findUserById(userId)
      const product = await this.productsRepository.findProductById(productId)

      const points = +user.points + +product.price
      console.log(points)

      const [updatedUser, updatedOrder] =
        await this.ownerOrderRepository.CancelOrder(orderId, userId, points)

      // 작업 성공 시 응답
      return [updatedUser, updatedOrder]
    } catch (err) {
      throw err // 에러를 상위 핸들러로 전파합니다.
    }
  }
}
