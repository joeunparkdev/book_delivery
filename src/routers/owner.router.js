import express from 'express'
import {
  authMiddleware,
  adminMiddleware,
} from '../middlewares/auth-middleware.js'
import { OwnerContorller } from '../controllers/owner.order.controllers.js'

const router = express.Router()
const ownerContorller = new OwnerContorller()

// GetOwnerOrder
router.get('/order', authMiddleware, ownerContorller.GetOwnerOrder)
//GetOrderByOrderId
router.get('/order/:orderId', authMiddleware, ownerContorller.GetOrderByOrderId)
//ProcessOrder
router.put(
  '/order/process/:orderId',
  authMiddleware,
  ownerContorller.ProcessOrder,
)
//CancelOrder
router.put(
  '/order/cancle/:orderId',
  authMiddleware,
  ownerContorller.CancelOrder,
)

export default router
