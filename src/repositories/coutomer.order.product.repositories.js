import ProductsController from "../controllers/products.controller.js";
import { prisma } from "../utils/prisma/index.js";

export class CustomerOrderProductRepository {
  orderProductByUser = async (userId, existProduct, address) => {
    const user = await prisma.users.findUnique({ where: { userId } });
    const points = user.points - existProduct.price;
    console.log(points);
  };
}
