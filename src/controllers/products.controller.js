import { ProductsService } from "../services/products.service.js";
import { StoresController } from "../controllers/bookstore.controller.js";

export class ProductsController {
  productsService = new ProductsService();
  storesController = new StoresController();

  getProducts = async (req, res, next) => {
    try {
      const products = await this.productsService.findAllProducts();

      return res.status(200).json({ data: products });
    } catch (err) {
      next(err);
    }
  };

  getProductsById = async (req, res, next) => {
    try {
      const { productId } = req.params;

      const product = await this.productsService.findProductById(productId);

      return res.status(200).json({ data: product });
    } catch (err) {
      next(err);
    }
  };

  createProduct = async (req, res, next) => {
    try {
      if (!req.user || !req.user.userId) {
        return res.status(401).json({ error: "User not logged in" });
      }

      const { name, description, price, author } = req.body;
      const userId = req.user.userId;
      const imageUrl = req.file?.location;
      const imagePath = req?.imagePath;

      const bookstore = await this.storesController.getMyStores(userId);

      const bookstoreId = bookstore.bookstoreId;

      console.log(bookstoreId);

      const newProduct = await this.productsService.createProduct(
        name,
        description,
        price,
        author,
        imageUrl,
        imagePath,
        userId,
        bookstoreId,
        new Date(),
        new Date(),
      );

      res.json({
        message: "상품을 생성하였습니다.",
        productId: newProduct.id,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  updateProduct = async (req, res, next) => {
    try {
      if (!req.user || !req.user.userId) {
        return res.status(401).json({ error: "User not logged in" });
      }

      const { name, description, status, price, author } = req.body;
      const { productId } = req.params;
      const userId = req.user.userId;
      const imageUrl = req.file.location;
      const imagePath = req?.imagePath;

      await this.productsService.updateProduct(
        productId,
        name,
        description,
        price,
        status,
        author,
        imageUrl,
        imagePath,
        new Date(),
        userId,
      );

      res.json({
        message: "상품 수정에 성공하였습니다.",
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  deleteProduct = async (req, res, next) => {
    try {
      const { productId } = req.params;

      if (!req.user || !req.user.userId) {
        return res.status(401).json({ error: "User not logged in" });
      }
      const userId = req.user.userId;

      await this.productsService.deleteProduct(productId, userId);

      res.json({
        message: "상품 삭제에 성공하였습니다.",
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  deleteAllProducts = async (req, res, next) => {
    try {
      await this.productsService.deleteAllProducts();

      res.json({
        message: "전체 상품 정보 삭제에 성공하였습니다.",
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
}

export default ProductsController;
