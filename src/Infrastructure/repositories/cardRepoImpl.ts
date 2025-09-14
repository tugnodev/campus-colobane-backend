import type { OCartRepo } from "../../Domaine/ports/outputs/cartRepo.js";
import type { createCartDto, updateCartDto, cartDto } from "../../Application/dtos/cart.js";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()

//export class CartRepoImpl implements OCartRepo {
//    
//}
