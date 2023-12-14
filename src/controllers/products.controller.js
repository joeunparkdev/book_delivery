import { ProductsService } from "../services/products.service.js";

export class ProductsController {
  productsService = new ProductsService();

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

  uploadImage = (req, res) => {
    console.log(req.file);
    if (req.file) {
      res.json({ url: req.file.location });
    } else {
      res.status(400).json({ message: "이미지 업로드에 실패했습니다." });
    }
  };

  createProduct = async (req, res, next) => {
    try {
      if (!req.user || !req.user.userId) {
        return res.status(401).json({ error: "User not logged in" });
      }

<<<<<<< HEAD
      const { name, description, price } = req.body;
=======
      const { name, description, price, author, image } = req.body;
>>>>>>> f919fef5a56913eccd2ddaf6ed108da4a50360af
      const userId = req.user.userId;

      const newProduct = await this.productsService.createProduct(
        name,
        description,
        price,
        author,
        image,
        userId,
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

<<<<<<< HEAD
      const { name, description, status, price } = req.body;
=======
      const { name, description, status, price, author, image } = req.body;
>>>>>>> f919fef5a56913eccd2ddaf6ed108da4a50360af
      const { productId } = req.params;

      const userId = req.user.userId;

      await this.productsService.updateProduct(
        productId,
        name,
<<<<<<< HEAD
        price,
=======
>>>>>>> f919fef5a56913eccd2ddaf6ed108da4a50360af
        description,
        price,
        status,
        author,
        image,
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
