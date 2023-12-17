import { CartService } from "../services/cart.service.js";
import { ProductsService } from "../services/products.service.js";

export class CartController {
  cartService = new CartService();
  productsService = new ProductsService();

  getCart = async (req, res, next) => {
    try {
      const userId = req.user.userId;
      const carts = await this.cartService.getCart(userId);
      res.status(200).json({
        message: "장바구니 목록 조회 성공하였습니다",
        data: { carts },
      });
    } catch (err) {
      next(err);
    }
  };

  createCart = async (req, res, next) => {
    try {
      const userId = req.user.userId;
      const { productId } = req.body;

      // 상품 정보를 가져오는 부분
      const product = await this.getProductInfo(productId, res);

      // 상품이 "SOLD_OUT"인 경우에는 장바구니에 담지 않음
      if (product.status === "SOLD_OUT") {
        return res.status(400).json({
          errorMessage:
            "이 상품은 품절되었습니다. 장바구니에 담을 수 없습니다.",
        });
      }

      // 이미 장바구니에 담긴 상품인지 확인
      const isProductInCart = await this.cartService.isProductInCart(
        userId,
        productId,
      );
      if (isProductInCart) {
        return res.status(400).json({
          errorMessage:
            "이미 장바구니에 담긴 상품입니다. 중복 담기는 허용되지 않습니다.",
        });
      }

      // 장바구니에 담기
      const createCart = await this.cartService.createCart(userId, productId);
      res
        .status(200)
        .json({ message: "장바구니에 담기 성공하였습니다", createCart });
    } catch (err) {
      next(err);
    }
  };

  deleteCart = async (req, res, next) => {
    try {
      const { productId } = req.body;
      const userId = req.user.userId;
      await this.cartService.deleteCart(userId, productId);
      res.status(200).json({ message: "상품을 삭제하였습니다" });
    } catch (err) {
      next(err);
    }
  };

  deleteAllCart = async (req, res, next) => {
    try {
      const userId = req.user.userId;
      await this.cartService.deleteAllCart(userId);
      res.json({ message: "상품을 삭제하였습니다" });
    } catch (err) {
      next(err);
    }
  };

  getProductInfo = async (productId, res) => {
    try {
      const product = await this.productsService.findProductById(productId);
      return product; // Return the product object
    } catch (err) {
      console.log(err);
      throw err; // Throw the error so it can be caught in the calling function
    }
  };
}
