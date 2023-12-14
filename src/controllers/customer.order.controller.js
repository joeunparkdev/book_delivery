import { CustomerOrderProductService } from "../services/customer.order.product.service.js";
import { prisma } from "../utils/prisma/index.js";
import { ProductsRepository } from "../repositories/products.repository.js"
import { TakeOrdersRepository } from "../repositories/takeorders.repository.js";

export class CustomerOrderProductController {
    customerOrderProductServiec = new CustomerOrderProductService();
    productsRepository = new ProductsRepository();
    takeOrdersRepository = new TakeOrdersRepository();
    orderProductByUser = async(req, res, next) => {
        try {
            const { productId } = req.params;
            const { address } = req.body;
            const userId = req.user.userId;
            const product = await this.productsRepository.findProductById(productId);
            const ownerId = product.userId;

            const orderedProductByUser = await this.customerOrderProductServiec.orderProductByUser(
                userId,
                productId,
                address,
            );

            const orderId = orderedProductByUser.orderId;
            console.log(orderId);

            const setTakeOrder = await this.takeOrdersRepository.setOwnerId(orderId, ownerId);

            if (!setTakeOrder) {
                return res.status(400).json({ error: '주문 오류' });
            }

            return res.status(200).json({
                message: "책 주문이 완료되었습니다.",
                data: orderedProductByUser,
            });
        } catch (err) {
            next(err);
        }
    };

}

export default CustomerOrderProductController;