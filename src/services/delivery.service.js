import { DeliveryRepository } from '../repositories/delivery.repository.js'

export class DeliveryService {
  deliveryRepository = new DeliveryRepository()

  dieliverSystem = async (orderId) => {
    const delivery = await this.deliveryRepository.dieliverSystem(orderId)

    return delivery
  }
}
