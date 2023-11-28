import { useMemo } from "react";
import { RawNote, Tag } from "../Types/types";

type NotesWithTagsProps = {
  notes: RawNote[];
  tags: Tag[];
};

function NotesWithTags({ notes, tags }: NotesWithTagsProps) {
  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  return null;
}

export default NotesWithTags;
