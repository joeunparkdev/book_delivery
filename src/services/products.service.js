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
        name: product.name,
        description: product.description,
        status: product.status,
        price:product.price,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
      };
    });
  };

  findProductById = async (productId) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const product = await this.productsRepository.findProductById(productId);
    console.log(product);
    return {
      productId: product.productId,
      userId:product.userId,
      name: product.name,
      description: product.description,
      status: product.status,
      price:product.price,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  };

  createProduct = async (name, description,price,userId) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createdProduct = await this.productsRepository.createProduct(
      name,
      description,
      userId,
      price,
    );
  
    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      productId: createdProduct.productId,
      name: createdProduct.name,
      description: product.description,
      status: createdProduct.status,
      price:createdProduct.price,
      createdAt: createdProduct.createdAt,
      updatedAt: createdProduct.updatedAt,
    };
    
  };

  updateProduct = async (productId, name,
    price,
    description ,
    status,
    updatedAt) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    console.log("existing productId="+productId);
    console.log("existing productName="+name);
    console.log("existing product price="+ price);
    console.log("existing description="+ description );
    console.log("existing status="+status);
    console.log("existing updatedAt="+updatedAt);
    console.log(productId, name,
      price,
      description ,
      status,
      updatedAt);
      console.log("service testing done");
    const product =
      await this.productsRepository.findProductById(productId);

        console.log("existingProduct="+product)

      if (!product) {
        return res
          .status(404)
          .json({ errorMessage: "상품 조회에 실패하였습니다." });
      }

      if (product.userId !== userId) {
        console.log("existingProduct.userId="+product.userId)
        return res
          .status(403)
          .json({ errorMessage: "해당 상품을 수정할 권한이 없습니다." });
      }


    // 저장소(Repository)에게 데이터 수정을 요청합니다.
    await this.productsRepository.updateProduct(
      productId,
      name,
      price,
      description ,
      status,
      updatedAt);

    // 변경된 데이터를 조회합니다.
    const updatedProduct =
      await this.productsRepository.findProductById(productId);

      return {
        productId: updatedProduct.productId,
        name: updatedProduct.name,
        description: product.description,
        status: updatedProduct.status,
        price: updatedProduct.price,
        createdAt: updatedProduct.createdAt,
        updatedAt: updatedProduct.updatedAt,
      };
      
  };

  deleteProduct = async (productId) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    const existingProduct =
      await this.productsRepository.findProductById(productId);
    
      console.log("existingProduct="+existingProduct);
      console.log("existingProduct.id="+existingProduct.userId);
      if (!existingProduct) {
        return res
          .status(404)
          .json({ errorMessage: "상품 조회에 실패하였습니다." });
      }

      if (existingProduct.userId !== userId) {
        return res
          .status(403)
          .json({ errorMessage: "해당 상품을 삭제할 권한이 없습니다." });
      }
     
    // 저장소(Repository)에게 데이터 삭제를 요청합니다.
    await this.productsRepository.deleteProduct(productId);

    return {
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
