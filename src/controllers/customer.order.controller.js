import { CustomerOrderProductService } from '../services/customer.order.product.service.js'
import { prisma } from '../utils/prisma/index.js'
import { ProductsRepository } from '../repositories/products.repository.js'
import { StoreRepository } from '../repositories/bookstore.repository.js'

export class CustomerOrderProductController {
  customerOrderProductService = new CustomerOrderProductService()
  productsRepository = new ProductsRepository()
  storeRepository = new StoreRepository()

  orderProductByUser = async (req, res, next) => {
    try {
      const { productId } = req.params
      const { address } = req.body
      const user = req.user
      const userName = user.name
      const userId = req.user.userId
      console.log(productId)
      const product = await this.productsRepository.findProductById(productId)
      const ownerId = product.userId
      const bookstoreId = product.bookstoreId
      const bookStore = await this.storeRepository.findStoreById(bookstoreId)

      console.log(user)
      console.log(bookStore)

      const [updatedUser, createdOrder] =
        await this.customerOrderProductService.orderProductByUser(
          user,
          product,
          userId,
          userName,
          productId,
          address,
          ownerId,
          bookstoreId,
        )

      return res.status(200).json({
        message: '책 주문이 완료되었습니다.',
        data: [updatedUser, createdOrder],
      })
    } catch (err) {
      next(err)
    }
  }
  getClientOrder = async (req, res, next) => {
    try {
      const userId = req.user.userId
      const order =
        await this.customerOrderProductService.getClientOrder(userId)

      return res.status(200).json({
        data: order,
      })
    } catch (error) {
      next(error)
    }
  }

  finOrderByOrderId = async (req, res, next) => {
    try {
      const orderId = req.params
      const userId = req.user.userId
      const order = await this.customerOrderProductService.finOrderByOrderId(
        orderId,
        userId,
      )

      return res.status(200).json({
        data: order,
      })
    } catch (error) {
      next(error)
    }
  }

  // 취소하기
  cancelOrder = async (req, res, next) => {
    try {
      const user = req.user
      const userId = user.userId
      const orderId = req.params
      const deleteOrder = await this.customerOrderProductService.cancelOrder(
        orderId,
        userId,
      )

      return res.status(200).json({
        message: '취소되었습니다.',
        data: deleteOrder,
      })
    } catch (error) {
      next(error)
    }
  }

  // 주문 완료와 확인하기

  deleteOrder = async (req, res, next) => {
    try {
      const user = req.user
      const userId = user.userId
      const orderId = req.params
      const deleteOrder = await this.customerOrderProductService.deleteOrder(
        orderId,
        userId,
      )

      return res.status(200).json({
        message: '확인되었습니다.',
        data: deleteOrder,
      })
    } catch (error) {
      next(error)
    }
  }
}

export default CustomerOrderProductController
