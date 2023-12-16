import { DeliveryService } from '../services/delivery.service.js'

export class DeliveryController {
  deliveryService = new DeliveryService()

  dieliverSystem = async (req, res, next) => {
    try {
      const orderId = req.params.orderId

      const delivery = await this.deliveryService.dieliverSystem(orderId)

      return res.status(200).json({ message: '배송 완료', data: delivery })
    } catch (error) {
      next(error)
    }
  }
}
