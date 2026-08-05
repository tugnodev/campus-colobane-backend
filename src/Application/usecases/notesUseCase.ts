import { type Notes } from "../../Domaine/entities/notes.js";
import { type INotesServices } from "../../Domaine/ports/inputs/notesService.js";
import { type ONotesRepo } from "../../Domaine/ports/outputs/notesRepo.js";
import type {
  createNotesDto,
  updateNotesDto,
  deleteNotesDto,
} from "../dtos/notes.js";

export class NotesUseCase implements INotesServices {
  constructor(private readonly notesRepo: ONotesRepo) {}

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
