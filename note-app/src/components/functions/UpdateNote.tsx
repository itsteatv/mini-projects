import { RawNote, Tag, NoteData } from "../types/types";

export const updateNote = (
  notes: RawNote[],
  id: string,
  { tags, ...data }: NoteData
): RawNote[] => {
  return notes.map((note) =>
    note.id === id
      ? { ...note, ...data, tagIds: tags.map((tag) => tag.id) }
      : note
  );
};