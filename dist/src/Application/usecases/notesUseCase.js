import {} from "../../Domaine/entities/notes.js";
import {} from "../../Domaine/ports/inputs/notesService.js";
import {} from "../../Domaine/ports/outputs/notesRepo.js";
export class NotesUseCase {
    notesRepo;
    constructor(notesRepo) {
        this.notesRepo = notesRepo;
    }
    async createNote(data) {
        return this.notesRepo.createNote(data);
    }
    async updateNote(data) {
        return this.notesRepo.updateNote(data);
    }
    async deleteNote(data) {
        return this.notesRepo.deleteNote(data);
    }
}
