export class NotesService {
    notesRepo;
    constructor(repo) {
        this.notesRepo = repo;
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
