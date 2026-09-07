import {} from "hono";
import {} from "../../../Application/usecases/notesUseCase.js";
export class NotesController {
    notesUseCase;
    constructor(notesUseCase) {
        this.notesUseCase = notesUseCase;
    }
    async createNotes(ctx) {
        const data = await ctx.req.json();
        const note = await this.notesUseCase.createNote(data);
        return ctx.json(note);
    }
    async updateNotes(ctx) {
        const data = await ctx.req.json();
        const note = await this.notesUseCase.updateNote(data);
        return ctx.json(note);
    }
    async deleteNotes(ctx) {
        const data = await ctx.req.json();
        const note = await this.notesUseCase.deleteNote(data);
        return ctx.json(note);
    }
}
