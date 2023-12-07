import { prisma } from '../utils/prisma/index.js';
import PRODUCT_STATUS from "../constants/app.constants.js";

export class ProductsRepository {
  findAllProducts = async () => {
    // ORM인 Prisma에서 Products 모델의 findMany 메서드를 사용해 데이터를 요청합니다.
    const Products = await prisma.products.findMany();

    return Products;
  };

  findProductById = async (productId) => {
    ("productId2="+ productId)
    // ORM인 Prisma에서 Products 모델의 findUnique 메서드를 사용해 데이터를 요청합니다.
    const product = await prisma.products.findUnique({
      where: { productId: +productId }, 
    });
    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  };

  createProduct = async (name, description,userId, price, createdAt,updatedAt) => {
    // ORM인 Prisma에서 Products 모델의 create 메서드를 사용해 데이터를 요청합니다.
    const createdProduct = await prisma.products.create({
      data: {
        name,
        description,
        status: PRODUCT_STATUS.FOR_SALE,
        price,
        userId,
        createdAt,
        updatedAt,
      },
    });

    return createdProduct;
  };

  updateProduct = async (productId, name, description, status, price, updatedAt) => {
    // ORM인 Prisma에서 Products 모델의 update 메서드를 사용해 데이터를 수정합니다.
    const updatedProduct = await prisma.products.update({
      where: {
        productId: +productId,
      },
      data: {
        name,
        description,
        status,
        price,
        updatedAt,
      },
    });

    return updatedProduct;
  };

  deleteProduct = async (productId) => {
    // ORM인 Prisma에서 Products 모델의 delete 메서드를 사용해 데이터를 삭제합니다.
    const deletedProduct = await prisma.products.delete({
      where: {
          productId: +productId,
      },
    });

    return deletedProduct;
  };

  deleteAllProducts = async () => {
    try {
      // ORM인 Prisma에서 Products 모델의 delete 메서드를 사용해 데이터를 삭제합니다.
      const deletedProducts = await prisma.products.deleteMany();
      return deletedProducts;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
