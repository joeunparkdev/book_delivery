import { CartService } from "../services/cart.service.js";

export class CartController {
  cartService = new CartService();

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

      const createCart = await this.cartService.createCart(userId, productId);

      res
        .status(200)
        .json({ message: "장바구니에 담기 성공하였습니다", createCart });
    } catch (err) {
      next(err);
    }
  };

  // updateCart = async (req, res, next) => {
  //   try {
  //     const { productId } = req.body;
  //     const userId = req.user.userId;

  //     const updatedRows = await this.cartService.updateCart(userId, productId);

  //     return res.json({
  //       message: "상품 정보를 수정하였습니다",
  //       updatedRows,
  //     });
  //   } catch (err) {
  //     next(err);
  //   }
  // };

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
}
