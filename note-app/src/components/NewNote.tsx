import { NoteForm } from "./NoteForm";
import { NoteData, Tag } from "./types/types";

type NewNoteProps = {
  onCreateNote: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  allAvailableTags: Tag[];
};

export function NewNote({
  onCreateNote,
  onAddTag,
  allAvailableTags,
}: NewNoteProps) {
  return (
    <div>
      <NoteForm
        mode="new"
        onSubmit={onCreateNote}
        onAddTag={onAddTag}
        allAvailableTags={allAvailableTags}
      />
    </div>
  );
}
