import { PrismaClient } from "../../../prisma/generated/prisma/index.js";
import { PrismaClientKnownRequestError } from "../../../prisma/generated/prisma/runtime/library.js";
import {} from "../../Domaine/entities/notes.js";
const prisma = new PrismaClient();
export class NotesRepoImpl {
    async createNote(data) {
        try {
            const note = await prisma.notes.create({
                data,
            });
            return note;
        }
        catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                return "Note already exists";
            }
            throw "Internal Server Error";
        }
    }
    async updateNote(data) {
        try {
            const update = await prisma.notes.update({
                where: { id: data.id },
                data,
            });
            return update;
        }
        catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                return "Note not found";
            }
            return "Internal Server Error";
        }
    }
    async deleteNote(data) {
        try {
            await prisma.notes.delete({
                where: { id: data.id },
            });
            return "Note deleted successfully";
        }
        catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                return "Note not found";
            }
            throw "Internal Server Error";
        }
    }
}
