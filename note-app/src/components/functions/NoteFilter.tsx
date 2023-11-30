import { useMemo } from "react";
import { Note, Tag } from "../Types/types";

interface NoteFilterProps {
  notes: Note[];
  title: string;
  selectedTags: Tag[];
}

export function NoteFilter({ notes, title, selectedTags }: NoteFilterProps) {
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      return (
        title === "" ||
        (note.title.toLowerCase().includes(title.toLowerCase()) &&
          (selectedTags.length === 0 ||
            selectedTags.every((tag) =>
              note.tags.some((noteTag) => noteTag.id === tag.id)
            )))
      );
    });
  }, [notes, title, selectedTags]);

  return filteredNotes;
}
