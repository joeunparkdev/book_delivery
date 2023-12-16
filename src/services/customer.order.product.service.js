import { CustomerOrderProductRepository } from '../repositories/coutomer.order.product.repositories.js'
import { ProductsRepository } from '../repositories/products.repository.js'
import { UsersRepository } from '../repositories/users.repository.js'
import { StoreRepository } from '../repositories/bookstore.repository.js'
import { tick } from 'svelte'

export class CustomerOrderProductService {
  customerOrderProductRepository = new CustomerOrderProductRepository()
  productsRepository = new ProductsRepository()
  userRepository = new UsersRepository()

  orderProductByUser = async (
    user,
    product,
    userId,
    userName,
    productId,
    address,
    ownerId,
    bookstoreId,
  ) => {
    try {
      if (!address) {
        throw new Error('주소를 입력받지 못했습니다.')
      }
      if (!product) {
        throw new Error('해당하는 책이 존재하지 않아 주문을 할 수 없습니다.')
      }
      if (!user) {
        throw new Error('유저가 존재하지 않습니다.')
      }
      const points = user.points - product.price
      if (!user.points || product.price > user.points) {
        throw new Error('포인트가 부족하여 결제가 불가능합니다.')
      }
      console.log(productId)

      const [updatedUser, createdOrder] =
        await this.customerOrderProductRepository.orderProductByUser(
          points,
          userId,
          userName,
          productId,
          address,
          ownerId,
          bookstoreId,
        )
      console.log(createdOrder)

      const ordersArray = Array.isArray(createdOrder)
        ? createdOrder
        : [createdOrder]

      const orderWithProducts = await Promise.all(
        ordersArray.map(async (order) => {
          const product = await this.productsRepository.findProductById(
            order.productId,
          )

          return {
            ...order,
            product,
          }
        }),
      )

      return [updatedUser, orderWithProducts]
    } catch (error) {
      console.error('주문 처리 중 오류 발생:', error)
      throw new Error('주문 처리 중 오류가 발생했습니다.')
    }
  }

  getClientOrder = async (userId) => {
    try {
      const orders =
        await this.customerOrderProductRepository.getClientOrder(userId)

      const orderWithProducts = await Promise.all(
        orders.map(async (order) => {
          const product = await this.productsRepository.findProductById(
            order.productId,
          )

          return {
            ...order,
            product,
          }
        }),
      )

      return orderWithProducts
    } catch (error) {
      next(error)
    }
  }

  findOrderByOrderId = async (orderId) => {
    try {
      const order =
        await this.customerOrderProductRepository.findOrderByOrderId(orderId)

      const ordersArray = Array.isArray(order) ? order : [order]

      const orderWithProducts = await Promise.all(
        ordersArray.map(async (orderItem) => {
          const product = await this.productsRepository.findProductById(
            +orderItem.productId,
          )

          return {
            ...orderItem,
            product,
          }
        }),
      )

      return orderWithProducts
    } catch (error) {
      throw error
    }
  }

  clientCancelOrder = async (orderId, userId) => {
    try {
      const order =
        await this.customerOrderProductRepository.findOrderByOrderId(orderId)

      if (userId !== order.userId) {
        throw new Error('권한이 없습니다.')
      }

      if (order.status === '배송 중') {
        throw new Error('배송중에는 취소할 수 없습니다.')
      }

      const canceledOrder =
        await this.customerOrderProductRepository.clientCancelOrder(orderId)

      return canceledOrder
    } catch (error) {
      next(error)
    }
  }
  clearOrder = async (orderId) => {
    try {
      const order =
        await this.customerOrderProductRepository.clearOrder(orderId)

      return order
    } catch (error) {
      next(error)
    }
  }
}
