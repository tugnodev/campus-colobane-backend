import type {
  createCartDto,
  updateCartDto,
  cartDto,
} from "../../../Application/dtos/cart.js";

export interface OCartRepo {
<<<<<<< HEAD
  createCart(cart: createCartDto): Promise<cartDto | string>;
  updateCart(cart: updateCartDto): Promise<cartDto | string>;
  deleteCart(id: string): Promise<string>;
  getByUserId(userId: string): Promise<cartDto | string>;
}
=======
    createCart(cart: createCartDto): Promise<cartDto | string>;
    updateCart(cart: updateCartDto): Promise<cartDto | string>;
    deleteCart(id: string): Promise<string>;
    getAllCarts(): Promise<cartDto[] | string>;
    getByUserId(userId: string): Promise<cartDto[] | string>;
    getByCartId(cartId: string): Promise<cartDto | string>;
}   
>>>>>>> panier
