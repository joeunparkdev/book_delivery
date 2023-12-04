import { prisma } from '../utils/prisma/index.js';
import PRODUCT_STATUS from "../constants/app.constants.js";

export class ProductsRepository {
  findAllProducts = async () => {
    // ORM인 Prisma에서 Products 모델의 findMany 메서드를 사용해 데이터를 요청합니다.
    const Products = await prisma.Products.findMany();

    return Products;
  };

  findProductById = async (productId) => {
    // ORM인 Prisma에서 Products 모델의 findUnique 메서드를 사용해 데이터를 요청합니다.
    const product = await prisma.Products.findUnique({
      where: { productId: +productId },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  };

  createProduct = async (title, content) => {
    // ORM인 Prisma에서 Products 모델의 create 메서드를 사용해 데이터를 요청합니다.
    const createdProduct = await prisma.Products.create({
      data: {
        title,
        content,
        status: PRODUCT_STATUS.FOR_SALE,
        userId,
        createdAt,
        updatedAt,
      },
    });

    return createdProduct;
  };

  updateProduct = async (productId, title, content, status) => {
    // ORM인 Prisma에서 Products 모델의 update 메서드를 사용해 데이터를 수정합니다.

    const existingProduct = await this.findProductById(productId);

    const updatedProduct = await prisma.Products.update({
      where: {
        productId: +productId,
      },
      data: {
        title,
        content,
        status: status || existingProduct.status,
        createdAt,
        updatedAt,
      },
    });

    return updatedProduct;
  };

  deleteProduct = async (productId) => {
    // ORM인 Prisma에서 Products 모델의 delete 메서드를 사용해 데이터를 삭제합니다.
    const existingProduct = await this.findProductById(productId);

    const deletedProduct = await prisma.Products.delete({
      where: {
        productId: +productId,
      },
    });

    return deletedProduct;
  };

  deleteAllProducts = async () => {
    try {
      // ORM인 Prisma에서 Products 모델의 delete 메서드를 사용해 데이터를 삭제합니다.
      const deletedProducts = await prisma.Products.deleteMany();
      return deletedProducts;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
