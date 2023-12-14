import { prisma } from "../utils/prisma/index.js";

export class TakeOrdersRepository {


    setOwnerId = async(ownerId, orderId) => {

        await prisma.takeOrders.create(ownerId, orderId)

        return takeOrders
    }
}