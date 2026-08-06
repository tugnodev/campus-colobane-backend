import { Hono } from "hono"
import { MessageRepoImpl } from "../../../repositories/messageRepoImpl.js"
import { MessageUseCase } from "../../../../Application/usecases/messageUseCase.js";

const messageRepo = new MessageRepoImpl();
const messageUseCase = new MessageUseCase(messageRepo);
