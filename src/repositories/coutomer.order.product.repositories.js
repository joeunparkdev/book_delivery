import ProductsController from "../controllers/products.controller.js";
import { prisma } from "../utils/prisma/index.js";

export class CustomerOrderProductRepository {
    orderProductByUser = async(userId, existProduct, address) => {
        const user = await prisma.users.findUnique({ where: { userId } });
        const points = user.points - existProduct.price;

        const [users, order] = await prisma.$transaction([
            prisma.users.update({
                where: {
                    userId: userId,
                },
                data: {
                    points: points,
                },
            }),
            prisma.orders.create({
                data: {
                    userId: userId,
                    productId: existProduct.productId,
                    address: address,
                    status: "주문완료",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            }),
        ]);

        return order;
    };
}