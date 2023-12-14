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
    console.log(existProduct);
    if (!address) {
      throw new Error("주소를 입력받지 못했습니다.");
    }
    if (!existProduct) {
      throw new Error("해당하는 책이 존재하지 않아 주문을 할 수 없습니다.");
    }
    if (!userId || existProduct.price > userId.points) {
      throw new Error("포인트가 부족합니다.");
    }

    await this.customerOrderProductRepository.orderProductByUser(
      userId,
      existProduct,
      address,
    );
    return {
      productId: existProduct.productId,
      name: existProduct.name,
      author: existProduct.author,
      imageUrl: existProduct.imageUrl,
      price: existProduct.price,
      address: address,
      createdAt: existProduct.createdAt,
      updatedAt: existProduct.updatedAt,
    };
  };
}
