import { CustomerOrderProductService } from "../services/customer.order.product.service.js";
import { prisma } from "../utils/prisma/index.js";
import { ProductsRepository } from "../repositories/products.repository.js";
import { StoreRepository } from "../repositories/bookstore.repository.js";
import { CustomerOrderProductRepository } from "../repositories/coutomer.order.product.repositories.js";

export class CustomerOrderProductController {
  customerOrderProductService = new CustomerOrderProductService();
  productsRepository = new ProductsRepository();
  storeRepository = new StoreRepository();
  customerOrderProductRepository = new CustomerOrderProductRepository();

  orderProductByUser = async (req, res, next) => {
    try {
      // const { productId } = req.params
      const { address, productId } = req.body;
      const user = req.user;
      const userName = user.name;
      const userId = req.user.userId;
      const product = await this.productsRepository.findProductById(productId);
      const ownerId = product.userId;
      const bookstoreId = product.bookstoreId;

      const confirm =
        await this.customerOrderProductRepository.findOrderByProductId(
          productId,
        );

      const [updatedUser, createdOrder] =
        await this.customerOrderProductService.orderProductByUser(
          user,
          product,
          userId,
          userName,
          productId,
          address,
          ownerId,
          bookstoreId,
        );

      return res.status(200).json({
        message: "책 주문이 완료되었습니다.",
        data: [updatedUser, createdOrder],
      });
    } catch (err) {
      next(err);
    }
  };
  getClientOrder = async (req, res, next) => {
    try {
      const userId = req.user.userId;
      const order =
        await this.customerOrderProductService.getClientOrder(userId);

      return res.status(200).json({
        data: order,
      });
    } catch (error) {
      next(error);
    }
  };

  findOrderByOrderId = async (req, res, next) => {
    try {
      const orderId = req.params.orderId;
      const userId = req.user.userId;
      const order = await this.customerOrderProductService.findOrderByOrderId(
        orderId,
        userId,
      );

      return res.status(200).json({
        data: order,
      });
    } catch (error) {
      next(error);
    }
  };

  // 취소하기
  clientCancelOrder = async (req, res, next) => {
    try {
      const user = req.user;
      const userId = user.userId;
      const orderId = req.params.orderId;
      const deleteOrder =
        await this.customerOrderProductService.clientCancelOrder(
          orderId,
          userId,
        );

      return res.status(200).json({
        message: "취소되었습니다.",
        data: deleteOrder,
      });
    } catch (error) {
      next(error);
    }
  };

  // 주문 완료와 확인하기

  clearOrder = async (req, res, next) => {
    try {
      const user = req.user;
      const userId = user.userId;
      const orderId = req.params.orderId;

      const orderWithProducts =
        await this.customerOrderProductService.findOrderByOrderId(orderId);

      const order = orderWithProducts[0];
      const clientId = order.userId;

      if (clientId !== userId) {
        return res.status(400).json({ message: "권한이 없습니다." });
      }

      const status = order.status;

      if (status !== "배송 완료" && status !== "주문 취소") {
        return res
          .status(400)
          .json({ message: "배송 중에는 취소할 수 없습니다." });
      }

      const deleteOrder =
        await this.customerOrderProductService.clearOrder(orderId);

      return res.status(200).json({
        message: "감사합니다.",
        data: deleteOrder,
      });
    } catch (error) {
      next(error);
    }
  };
}
export default CustomerOrderProductController;
