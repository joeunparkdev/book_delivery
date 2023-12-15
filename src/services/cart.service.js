import { CartRepository } from "../repositories/cart.repository.js";

export class CartService {
  cartRepository = new CartRepository();
}
