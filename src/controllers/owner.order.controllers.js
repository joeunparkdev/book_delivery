import { OwnerOrderService } from '../services/owner.order.service.js'
import { UsersRepository } from '../repositories/users.repository.js'

export class OwnerContorller {
  ownerOrderService = new OwnerOrderService()
  usersRepository = new UsersRepository()

  //getorders//getOwner
  GetOwnerOrder = async (req, res, next) => {
    try {
      const ownerId = req.user.userId
      const owner = await this.usersRepository.findUserById(ownerId)

      if (owner.usertype !== 'OWNER') {
        return res.status(400).json({ message: '오너가 아닙니다.' })
      }

      const order = await this.ownerOrderService.GetOwnerOrder(ownerId)
      console.log(order)

      return res.status(200).json({ data: order })
    } catch (err) {
      next(err)
    }
  }
  //getorder/orderId/orderId/
  GetOrderByOrderId = async (req, res, next) => {
    try {
      const orderId = req.params.orderId // req.params 내에서 orderId를 가져오도록 수정
      const comfirmId = req.user.userId
      const order = await this.ownerOrderService.GetOrderByOrderId(orderId)

      if (order.ownerId !== comfirmId) {
        return res.status(400).json({ error: '권한이 없습니다.' })
      }

      return res.status(200).json({ data: order })
    } catch (err) {
      next(err)
    }
  }

  // 물건을 보냈을 때
  // 물건을 보내지 않았을 때
  ProcessOrder = async (req, res, next) => {
    try {
      const orderId = req.params.orderId
      const ClearedOrder = await this.ownerOrderService.ProcessOrder(orderId)

      return res
        .status(200)
        .json({ message: '주문을 처리하였습니다.', data: ClearedOrder })
    } catch (err) {
      next(err)
    }
  }

  CancelOrder = async (req, res, next) => {
    try {
      const orderId = req.params.orderId // req.params에서 orderId를 가져와야 합니다.
      const CanceledOrder = await this.ownerOrderService.CancelOrder(orderId)

      return res
        .status(200)
        .json({ message: '주문을 취소하였습니다.', data: CanceledOrder })
    } catch (err) {
      next(err)
    }
  }
}
