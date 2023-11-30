import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NewNote } from "./components/NewNote";
import { useLocalStorage } from "./components/hook/useLocalStorage";
import { NoteData, RawNote, Tag } from "./components/Types/types";
import { createNote } from "./components/functions/CreateNote";
import { AddTag } from "./components/functions/AddTag";
import { NoteList } from "./components/NoteList";
import { useMemo } from "react";

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
        {/* <Route element={<ProtectedRoute> <AppLayout /> </ProtectedRoute>}> */}
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
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        {/* </Route> */}

        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
