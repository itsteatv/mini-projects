import { v4 as uuidV4 } from "uuid";
import { RawNote, NoteData } from "../Types/types";

export const createNote = (
  { tags, ...data }: NoteData,
  prevNotes: RawNote[]
): RawNote[] => {
  return [
    ...prevNotes,
    { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
  ];
};
