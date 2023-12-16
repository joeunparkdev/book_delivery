import express from 'express'
import {
  authMiddleware,
  adminMiddleware,
} from '../middlewares/auth-middleware.js'
import { CustomerOrderProductController } from '../controllers/customer.order.controller.js'

const router = express.Router()
const customerOrderController = new CustomerOrderProductController()

router.post(
  '/:productId',
  authMiddleware,
  customerOrderController.orderProductByUser,
)

router.get('/client', authMiddleware, customerOrderController.getClientOrder)

router.get(
  '/client/:orderId',
  authMiddleware,
  customerOrderController.findOrderByOrderId,
)

router.delete(
  '/client/cancel/:orderId',
  authMiddleware,
  customerOrderController.clientCancelOrder,
)

router.delete(
  '/client/confirm/:orderId',
  authMiddleware,
  customerOrderController.clearOrder,
)

export default router
