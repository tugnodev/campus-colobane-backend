import { db } from "../../db/index.js";
import { notes } from "../../db/schema.js";
import { eq } from "drizzle-orm";
import { type Notes } from "../../Domaine/entities/notes.js";
import type { ONotesRepo } from "../../Domaine/ports/outputs/notesRepo.js";
import type {
  createNotesDto,
  updateNotesDto,
  deleteNotesDto,
} from "../../Application/dtos/notes.js";

export class NotesRepoImpl implements ONotesRepo {
  async createNote(data: createNotesDto): Promise<Notes | string> {
    try {
      const [note] = await db.insert(notes).values(data).returning();
      return note;
    } catch (error: any) {
      if (error?.code === "23505") {
        return "Note already exists";
      }
      throw "Internal Server Error";
    }
  }

  async updateNote(data: updateNotesDto): Promise<Notes | string> {
    try {
      const { id, ...rest } = data;
      const [updated] = await db
        .update(notes)
        .set(rest)
        .where(eq(notes.id, id))
        .returning();

      if (!updated) return "Note not found";
      return updated;
    } catch (error: any) {
      if (error?.code === "23505") {
        return "Note not found";
      }
      return "Internal Server Error";
    }
  }

  async deleteNote(data: deleteNotesDto): Promise<string> {
    try {
      const [deleted] = await db
        .delete(notes)
        .where(eq(notes.id, data.id))
        .returning();

      if (!deleted) return "Note not found";
      return "Note deleted successfully";
    } catch (error) {
      throw "Internal Server Error";
    }
  }
}
