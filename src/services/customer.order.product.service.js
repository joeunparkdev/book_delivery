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
      const order =
        await this.customerOrderProductRepository.getClientOrder(userId)

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

      return orderWithProducts
    } catch (error) {
      next(error)
    }
  }

  finOrderByOrderId = async (userId, orderId) => {
    try {
      const order =
        await this.customerOrderProductRepository.finOrderByOrderId(orderId)

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
      return orderWithProducts
    } catch (error) {
      next(error)
    }
  }
  cancelOrder = async (orderId, userId) => {
    try {
      const order =
        await this.customerOrderProductRepository.finOrderByOrderId(order)

      const canceledOrder =
        await this.customerOrderProductRepository.cancelOrder(orderId, userId)
    } catch (error) {
      next(error)
    }
  }
  deleteOrder = async (orderId, userId) => {
    try {
    } catch (error) {
      next(error)
    }
  }
}
