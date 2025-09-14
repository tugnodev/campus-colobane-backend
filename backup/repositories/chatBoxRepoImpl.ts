import { OChatBoxRepo } from "../../Domaine/ports/outputs/chatRepo";
import { createChatDto, updateChatDto, chatDto } from "../../Application/dtos/chatBox";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient()

export class ChatBoxRepoImpl implements OChatBoxRepo {

    async createChat(chat: createChatDto): Promise<chatDto | string> {
        const newChat = await prisma.chatBox.create({ data : { chat } })
        if(!newChat) return "Error while creating chat"

        return newChat as chatDto
    }

    async updateChat(chat: updateChatDto): Promise<chatDto | string> {
        const update = await prisma.chatBox.create({ where: { id: chat.id }, data: { chat } });
        if (!update) { return "Error while updating Chat" }

        return update as chatDto
    }

    async deleteChat(id: string): Promise<string> {
        const check = prisma.chatBox.frindUnique({ where: {id} });
        if(!check) return `This message doesn't existe anymore`

        return `Deleted with success`
    }

    async getChatById(id: string): Promise<chatDto | string> {
        const chat = prisma.chatBox.findUnique({ where: { id } })
        if (!chat) { return "Error while getting chat" }
        return chat as chatDto
    }

    async getAllChats(shop_id: string): Promise<chatDto[] | string> {
        const chats = await prisma.chatBox.findMany({ where: { shop_id: shop_id } })
        if (!chats) return "Error while getting chats"

        return chats as chatDto[]
    }
}
