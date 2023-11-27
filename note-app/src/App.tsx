import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NewNote } from "./components/NewNote";
import { useLocalStorage } from "./components/hook/useLocalStorage";
import { RawNote, Tags } from "./components/Types/types";

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tags[]>("TAGS", []);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<ProtectedRoute> <AppLayout /> </ProtectedRoute>}> */}
        <Route index path="*" element={<Navigate replace to="/" />} />
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
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
