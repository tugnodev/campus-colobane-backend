import type { OArticleRepo } from "../../Domaine/ports/outputs/articleRepo.js";
import type { createArticleDto, updateAticleDto, articleDto } from "../../Application/dtos/article.js";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()

//export class ArticleRepoImpl implements OArticleRepo {
//    
//}
