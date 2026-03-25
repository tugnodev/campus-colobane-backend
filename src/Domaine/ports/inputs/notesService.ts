import type {
  createNotesDto,
  updateNotesDto,
  deleteNotesDto,
} from "../../../Application/dtos/notes.js";

import type { Notes } from "../../entities/notes.js";

export interface INotesServices {
  createNote(data: createNotesDto): Promise<Notes | string>;
  updateNote(data: updateNotesDto): Promise<Notes | string>;
  deleteNote(data: deleteNotesDto): Promise<string>;
}
