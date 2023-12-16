import express from 'express'
import { DeliveryController } from '../controllers/delivery.controller.js'

import { authMiddleware } from '../middlewares/auth-middleware.js'

const router = express.Router()
const deliveryController = new DeliveryController()

router.put('/:orderId', authMiddleware, deliveryController.dieliverSystem)

export default router
