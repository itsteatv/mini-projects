import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NewNote } from "./components/NewNote";
import { useLocalStorage } from "./components/hook/useLocalStorage";
import { NoteData, RawNote, Tag } from "./components/Types/types";
import { createNote } from "./components/functions/CreateNote";
import { AddTag } from "./components/functions/AddTag";
import NotesWithTags from "./components/functions/NotesWithTags";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const handleCreateNote = (data: NoteData) => {
    setNotes((prevNotes) => createNote(data, prevNotes));
  };

  const handleAddTag = (tag: Tag) => {
    setTags((prevTags) => AddTag(tag, prevTags));
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<ProtectedRoute> <AppLayout /> </ProtectedRoute>}> */}
        <Route index path="*" element={<Navigate replace to="/" />} />
        <Route path="/" element={<h1>Home</h1>} />
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

      <NotesWithTags notes={notes} tags={tags} />
    </BrowserRouter>
  );
}

export default App;
