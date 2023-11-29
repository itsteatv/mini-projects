import { NoteForm } from "./NoteForm";
import { NoteData, Tag } from "./Types/types";

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
        onSubmit={onCreateNote}
        onAddTag={onAddTag}
        allAvailableTags={allAvailableTags}
      />
    </div>
  );
}
