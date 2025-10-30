import type { OOrderRepo } from "../../Domaine/ports/outputs/orderRepo.js";
import type {
  createOrderDto,
  updateOrderDto,
  orderDto,
} from "../../Application/dtos/order.js";

import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export class OrderRepoImpl implements OOrderRepo {
  async saveOrder( data : createOrderDto ): Promise<orderDto | string> {
    try{
      const newOrder = await prisma.order.create
    } catch(error){
      
    }
  }
}
