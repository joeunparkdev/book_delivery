import { CustomerOrderProductService } from "../services/customer.order.product.service.js";

export class CustomerOrderProductController {
  customerOrderProductServiec = new CustomerOrderProductService();

  orderProductByUser = async (req, res, next) => {
    try {
      const { productId } = req.params;
      const { address } = req.body;
      const userId = req.user.userId;

      const orderedProductByUser =
        await this.customerOrderProductServiec.orderProductByUser(
          userId,
          productId,
          address,
        );
      return res.status(200).json({
        messsage: "책 주문이 완료되었습니다.",
        data: orderedProductByUser,
      });
    } catch (err) {
      next(err);
    }
  };
}

export default CustomerOrderProductController;
