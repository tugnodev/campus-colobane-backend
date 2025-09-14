import type { OCategorieRepo } from "../../Domaine/ports/outputs/categorieRepo.js";
import type { categorieDto } from "../../Application/dtos/categorie.js";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()

//export class CategorieRepoImpl implements OCategorieRepo {
//    
//}
