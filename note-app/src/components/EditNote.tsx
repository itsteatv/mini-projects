import { NoteForm } from "./NoteForm";
import { useNote } from "./hooks/useNote";
import { NoteData, Tag } from "./types/types";

type EditNoteProps = {
  onEditNote: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  allAvailableTags: Tag[];
};

export function EditNote({
  onEditNote,
  onAddTag,
  allAvailableTags,
}: EditNoteProps) {
  const note = useNote();
  console.log(note);

  const handleEditNote = (data: NoteData) => {
    onEditNote(note.id, data);
  };

  return (
    <div>
      <h1>Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={handleEditNote}
        onAddTag={onAddTag}
        allAvailableTags={allAvailableTags}
      />
    </div>
  );
}
