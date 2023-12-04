import { ProductsRepository } from "../repositories/products.repository.js";

export class ProductsService {
  productsRepository = new ProductsRepository();

  findAllProducts = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const products = await this.ProductsRepository.findAllProducts();

    // 호출한 Products들을 가장 최신 게시글 부터 정렬합니다.
    products.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return products.map((product) => {
      return {
        productId: product.productId,
        productname: product.productname,
        title: product.title,
        status: product.status,
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
      productname: product.productname,
      title: product.title,
      status: product.status,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  };

  createProduct = async (title, content) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createdProduct = await this.productsRepository.createProduct(
      title,
      content,
    );

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      productId: product.productId,
      productname: product.productname,
      title: product.title,
      status: product.status,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  };

  updateProduct = async (productId, title, content, status) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const existingProduct =
      await this.productsRepository.findProductById(productId);
    if (!existingProduct) {
      return res
        .status(404)
        .json({ errorMessage: "상품 조회에 실패하였습니다." });
    }

    // 저장소(Repository)에게 데이터 수정을 요청합니다.
    await this.productsRepository.updateProduct(title, content, status);

    // 변경된 데이터를 조회합니다.
    const updatedProduct =
      await this.productsRepository.findProductById(productId);

    return {
      productId: product.productId,
      productname: product.productname,
      title: product.title,
      status: product.status,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  };

  deleteProduct = async (productId) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const existingProduct =
      await this.productsRepository.findProductById(productId);
    if (!existingProduct) {
      return res
        .status(404)
        .json({ errorMessage: "상품 조회에 실패하였습니다." });
    }

    // 저장소(Repository)에게 데이터 삭제를 요청합니다.
    await this.productsRepository.deleteProduct(productId);

    return {
      productId: product.productId,
      productname: product.productname,
      title: product.title,
      status: product.status,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  };

  deleteAllProducts = async () => {
    try {
      const deletedProducts = await this.productsRepository.deleteAllProducts();

      return {
        message: "All products deleted successfully",
        deletedProductCount: deletedProducts.length,
      };
    } catch (error) {
      console.error(error);
      throw new Error("Failed to delete all products");
    }
  };
}
