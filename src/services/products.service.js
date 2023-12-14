import { ProductsRepository } from "../repositories/products.repository.js";

export class ProductsService {
  productsRepository = new ProductsRepository();

  findAllProducts = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const products = await this.productsRepository.findAllProducts();

    // 호출한 Products들을 가장 최신 게시글 부터 정렬합니다.
    products.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return products.map((product) => {
      return {
        productId: product.productId,
        userId: product.userId,
        name: product.name,
        description: product.description,
        status: product.status,
        price: product.price,
        author: product.author,
        imageUrl: product.imageUrl,
        imagePath: product.imagePath,
        bookstoreId: product.bookstoreId,
        usertype: product.usertype,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
      };
    });
  };

  findProductById = async (productId) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const product = await this.productsRepository.findProductById(productId);
    return {
      productId: product.productId,
      userId: product.userId,
      name: product.name,
      description: product.description,
      status: product.status,
      price: product.price,
      author: product.author,
      imageUrl: product.imageUrl,
      imagePath: product.imagePath,
      bookstoreId: product.bookstoreId,
      usertype: product.usertype,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  };

  findProductByUserId = async (userId) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const product = await this.productsRepository.findProductsByUserId(userId);
    return {
      productId: product.productId,
      userId: product.userId,
      name: product.name,
      description: product.description,
      status: product.status,
      price: product.price,
      author: product.author,
      imageUrl: product.imageUrl,
      imagePath: product.imagePath,
      bookstoreId: product.bookstoreId,
      usertype: product.usertype,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  };

  createProduct = async (
    name,
    description,
    price,
    author,
    imageUrl,
    imagePath,
    userId,
    bookstoreId,
  ) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createdProduct = await this.productsRepository.createProduct(
      name,
      description,
      price,
      author,
      imageUrl,
      imagePath,
      userId,
      bookstoreId,
    );

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      productId: createdProduct.productId,
      userId: createdProduct.userId,
      name: createdProduct.name,
      description: createdProduct.description,
      status: createdProduct.status,
      price: createdProduct.price,
      author: createdProduct.author,
      imageUrl: createdProduct.imageUrl,
      imagePath: createdProduct.imagePath,
      bookstoreId: createdProduct.bookstoreId,
      usertype: createdProduct.usertype,
      createdAt: createdProduct.createdAt,
      updatedAt: createdProduct.updatedAt,
    };
  };

  updateProduct = async (
    productId,
    name,
    description,
    price,
    status,
    author,
    imageUrl,
    imagePath,
    updatedAt,
    userId,
  ) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    try {
      const existingProduct =
        await this.productsRepository.findProductById(productId);
      if (!existingProduct) {
        throw new Error("상품 조회에 실패하였습니다.");
      }
      if (existingProduct.userId !== userId) {
        throw new Error("해당 상품을 수정할 권한이 없습니다.");
      }

      // 저장소(Repository)에게 데이터 수정을 요청합니다.
      await this.productsRepository.updateProduct(
        productId,
        name,
        description,
        price,
        status,
        author,
        imageUrl,
        imagePath,
        updatedAt,
      );
    } catch (error) {
      console.error(error);
      throw new Error("상품 수정 실패");
    }
  };

  deleteProduct = async (productId, userId) => {
    try {
      const existingProduct =
        await this.productsRepository.findProductById(productId);

      if (!existingProduct) {
        throw new Error("상품 조회에 실패하였습니다.");
      }

      if (existingProduct.userId !== userId) {
        throw new Error("해당 상품을 삭제할 권한이 없습니다.");
      }

      // 저장소(Repository)에게 데이터 삭제를 요청합니다.
      await this.productsRepository.deleteProduct(productId);

      return {
        message: "상품 삭제 완료",
      };
    } catch (error) {
      console.error(error);
      throw new Error("상품 삭제 실패");
    }
  };

  deleteAllProducts = async () => {
    try {
      const deletedProducts = await this.productsRepository.deleteAllProducts();

      return {
        message: "전체 상품 삭제 완료",
        deletedProductCount: deletedProducts.length,
      };
    } catch (error) {
      console.error(error);
      throw new Error("전체 상품 삭제 실패");
    }
  };
}
