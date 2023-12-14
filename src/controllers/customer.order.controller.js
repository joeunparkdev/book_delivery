import { CustomerOrderProductService } from '../services/customer.order.product.service.js'
import { prisma } from '../utils/prisma/index.js'
import { ProductsRepository } from '../repositories/products.repository.js'
import { StoreRepository } from '../repositories/bookstore.repository.js'

export class CustomerOrderProductController {
  customerOrderProductServiec = new CustomerOrderProductService()
  productsRepository = new ProductsRepository()
  storeRepository = new StoreRepository()

  orderProductByUser = async (req, res, next) => {
    try {
      const { productId } = req.params
      const { address } = req.body
      const user = req.user
      const userName = user.name
      const userId = req.user.userId
      const product = await this.productsRepository.findProductById(productId)
      const ownerId = product.userId
      const bookstoreId = product.bookstoreId
      const bookStore = await this.storeRepository.findStoreById(bookstoreId)
      const bookStoreName = bookStore.name

      console.log(user)

      const [updatedUser, createdOrder] =
        await this.customerOrderProductServiec.orderProductByUser(
          user,
          product,
          userId,
          userName,
          productId,
          address,
          ownerId,
          bookstoreId,
          bookStoreName,
        )

      return res.status(200).json({
        message: '책 주문이 완료되었습니다.',
        data: { updatedUser, createdOrder },
      })
    } catch (err) {
      next(err)
    }
  }
}

export default CustomerOrderProductController
