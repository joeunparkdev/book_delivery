import { ProductsService } from "../services/products.service.js";
import PRODUCT_STATUS from "../constants/app.constants.js";

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

  createProduct = async (req, res, next) => {
    const { title, content } = req.body;
    const userId = req.user.id;

    try {
      const newProduct = await this.productsService.createProduct({
        data: {
          title,
          content,
          status: PRODUCT_STATUS.FOR_SALE,
          user: { connect: { id: userId } },
        },
      });

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
    const { title, content, status } = req.body;
    const userId = req.user.id;
    const productId = req.params.productId;

    try {
      const existingProduct =
        await this.productsService.findProductById(productId);

      if (!existingProduct) {
        return res
          .status(404)
          .json({ errorMessage: "상품 조회에 실패하였습니다." });
      }

      if (existingProduct.userId !== userId) {
        return res
          .status(403)
          .json({ errorMessage: "해당 상품을 수정할 권한이 없습니다." });
      }

      await this.productsService.updateProduct({
        where: { productId: +productId },
        data: {
          title,
          content,
          status: status || existingProduct.status,
        },
      });

      res.json({
        message: "상품 수정에 성공하였습니다.",
        productId: existingProduct.id,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  deleteProduct = async (req, res, next) => {
    const userId = req.user.id;
    const productId = req.params.productId;

    try {
      const existingProduct =
        await this.productsService.findProductById(productId);

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

      await this.productsService.deleteProduct({
        where: { productId: +productId },
      });

      res.json({
        message: "상품 삭제에 성공하였습니다.",
        productId: existingProduct.id,
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