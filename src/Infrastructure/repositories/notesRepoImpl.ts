import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaClientKnownRequestError } from "../../generated/prisma/runtime/client.js";
import { type Notes } from "../../Domaine/entities/notes.js";
import type { ONotesRepo } from "../../Domaine/ports/outputs/notesRepo.js";
import type {
  createNotesDto,
  updateNotesDto,
  deleteNotesDto,
} from "../../Application/dtos/notes.js";

const prisma = new PrismaClient();

export class NotesRepoImpl implements ONotesRepo {
  async createNote(data: createNotesDto): Promise<Notes | string> {
    try {
      const note = await prisma.notes.create({
        data,
      });
      return note;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "Note already exists";
      }
      throw "Internal Server Error";
    }
  }

  async updateNote(data: updateNotesDto): Promise<Notes | string> {
    try {
      const update = await prisma.notes.update({
        where: { id: data.id },
        data,
      });
      return update;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "Note not found";
      }
      return "Internal Server Error";
    }
  }

  async deleteNote(data: deleteNotesDto): Promise<string> {
    try {
      await prisma.notes.delete({
        where: { id: data.id },
      });
      return "Note deleted successfully";
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return "Note not found";
      }
      throw "Internal Server Error";
    }
  }
}
