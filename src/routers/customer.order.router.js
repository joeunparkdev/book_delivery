import express from "express";
import {
  authMiddleware,
  adminMiddleware,
} from "../middlewares/auth-middleware.js";
import { CustomerOrderProductController } from "../controllers/customer.order.controller.js";

const router = express.Router();
const customerOrderController = new CustomerOrderProductController();

router.post(
  "/:productId",
  authMiddleware,
  customerOrderController.orderProductByUser,
);

export default router;
