import { CustomerOrderProductRepository } from '../repositories/coutomer.order.product.repositories.js'
import { ProductsRepository } from '../repositories/products.repository.js'
import { UsersRepository } from '../repositories/users.repository.js'
import { StoreRepository } from '../repositories/bookstore.repository.js'

export class CustomerOrderProductService {
    customerOrderProductRepository = new CustomerOrderProductRepository()
    productsRepository = new ProductsRepository()
    userRepository = new UsersRepository()

    orderProductByUser = async(
        user,
        product,
        userId,
        userName,
        productId,
        address,
        ownerId,
        bookstoreId,
        bookStoreName,
    ) => {
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

        const [updatedUser, createdOrder] =
        await this.customerOrderProductRepository.orderProductByUser(
            points,
            userId,
            userName,
            productId,
            address,
            ownerId,
            bookstoreId,
            bookStoreName,
        )

        return updatedUser, createdOrder
    }
}