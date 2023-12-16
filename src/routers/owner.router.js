import express from 'express'
import {
  authMiddleware,
  adminMiddleware,
} from '../middlewares/auth-middleware.js'
import { OwnerContorller } from '../controllers/owner.order.controllers.js'

const router = express.Router()
const ownerContorller = new OwnerContorller()

// GetOwnerOrder
router.get('/owner', authMiddleware, ownerContorller.GetOwnerOrder)
//GetOrderByOrderId
router.get('/owner/:orderId', authMiddleware, ownerContorller.GetOrderByOrderId)
//ProcessOrder
router.put(
  '/owner/process/:orderId',
  authMiddleware,
  ownerContorller.ProcessOrder,
)
//CancelOrder
router.put(
  '/owner/cancel/:orderId',
  authMiddleware,
  ownerContorller.CancelOrder,
)

export default router
