import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NewNote } from "./components/NewNote";
import { useLocalStorage } from "./components/hooks/useLocalStorage";
import { NoteData, RawNote, Tag } from "./components/types/types";
import { createNote } from "./components/functions/CreateNote";
import { AddTag } from "./components/functions/AddTag";
import { NoteList } from "./components/NoteList";
import { useMemo } from "react";
import { NoteLayout } from "./components/NoteLayout";
import { Note } from "./components/Note";
import { EditNote } from "./components/EditNote";
import { updateNote } from "./components/functions/UpdateNote";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  console.log(notes);

  const handleCreateNote = (data: NoteData) => {
    setNotes((prevNotes) => createNote(data, prevNotes));
  };

  const handleAddTag = (tag: Tag) => {
    setTags((prevTags) => AddTag(tag, prevTags));
  };

  const handleNoteUpdate = (id: string, { tags, ...data }: NoteData) => {
    setNotes((prevNotes) => updateNote(prevNotes, id, { tags, ...data }));
  };

  const handleDeleteNote = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="*" element={<Navigate replace to="/" />} />
        <Route
          path="/"
          element={<NoteList notes={notesWithTags} allAvailableTags={tags} />}
        />
        <Route
          path="/new"
          element={
            <NewNote
              onCreateNote={handleCreateNote}
              onAddTag={handleAddTag}
              allAvailableTags={tags}
            />
          }
        />
        <Route path=":id" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<Note handleDeleteNote={handleDeleteNote} />} />
          <Route
            path="edit"
            element={
              <EditNote
                onEditNote={handleNoteUpdate}
                onAddTag={handleAddTag}
                allAvailableTags={tags}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
