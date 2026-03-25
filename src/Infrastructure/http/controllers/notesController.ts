import { type Context } from "hono";
import { type NotesUseCase } from "../../../Application/usecases/notesUseCase.js";
import type {
  createNotesDto,
  updateNotesDto,
  deleteNotesDto,
} from "../../../Application/dtos/notes.js";

export class NotesController {
  constructor(private notesUseCase: NotesUseCase) {}

  async createNotes(ctx: Context) {
    const data: createNotesDto = await ctx.req.json<createNotesDto>();
    const note = await this.notesUseCase.createNote(data);
    return ctx.json(note);
  }

  async updateNotes(ctx: Context) {
    const data: updateNotesDto = await ctx.req.json<updateNotesDto>();
    const note = await this.notesUseCase.updateNote(data);
    return ctx.json(note);
  }

  async deleteNotes(ctx: Context) {
    const data: deleteNotesDto = await ctx.req.json<deleteNotesDto>();
    const note = await this.notesUseCase.deleteNote(data);
    return ctx.json(note);
  }
}
