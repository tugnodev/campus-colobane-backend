import type {
  createNotesDto,
  updateNotesDto,
  deleteNotesDto,
} from "../../Application/dtos/notes.js";
import type { Notes } from "../entities/notes.js";
import type { INotesServices } from "../ports/inputs/notesService.js";
import type { ONotesRepo } from "../ports/outputs/notesRepo.js";

export class NotesService implements INotesServices {
  private notesRepo: ONotesRepo;
  constructor(repo: ONotesRepo) {
    this.notesRepo = repo;
  }
  async createNote(data: createNotesDto): Promise<Notes | string> {
    return this.notesRepo.createNote(data);
  }
  async updateNote(data: updateNotesDto): Promise<Notes | string> {
    return this.notesRepo.updateNote(data);
  }
  async deleteNote(data: deleteNotesDto): Promise<string> {
    return this.notesRepo.deleteNote(data);
  }
}
