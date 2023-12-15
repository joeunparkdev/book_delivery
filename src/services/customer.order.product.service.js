import { CustomerOrderProductRepository } from "../repositories/coutomer.order.product.repositories.js";
import { ProductsRepository } from "../repositories/products.repository.js";
import { UsersRepository } from "../repositories/users.repository.js";

export class CustomerOrderProductService {
  customerOrderProductRepository = new CustomerOrderProductRepository();
  productsRepository = new ProductsRepository();
  userRepository = new UsersRepository();

  orderProductByUser = async (userId, productId, address) => {
    const existProduct =
      await this.productsRepository.findProductById(productId);

    if (!address) {
      throw new Error("주소를 입력받지 못했습니다.");
    }

    if (!existProduct) {
      throw new Error("해당하는 책이 존재하지 않아 주문을 할 수 없습니다.");
    }

    const existUser = await this.userRepository.findUserById(userId);
    if (!existUser) {
      throw new Error("유저가 존재하지 않습니다.");
    }

    const points = existUser.points - existProduct.price;

    if (!existUser.points || existProduct.price > existUser.points) {
      throw new Error("포인트가 부족하여 결제가 불가능합니다.");
    }

    await this.customerOrderProductRepository.orderProductByUser(
      existUser,
      existProduct,
      address,
      points,
    );

    return {
      user: {
        userId: existUser.userId,
        username: existUser.username,
        points: existUser.points,
      },
      product: {
        productId: existProduct.productId,
        name: existProduct.name,
        author: existProduct.author,
        imageUrl: existProduct.imageUrl,
        price: existProduct.price,
        address: address,
        createdAt: existProduct.createdAt,
        updatedAt: existProduct.updatedAt,
      },
    };
  };
}
