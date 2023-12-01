import { Note } from "./types/types";
import { Outlet, useParams } from "react-router-dom";
import PageNotFound from "./ui/PageNotFound";

type NoteLayoutProps = {
  notes: Note[];
};

export function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams();

  const note = notes.find((note) => note.id === id);
  console.log(id, note);

  if (note === null) return <PageNotFound />;

  return <Outlet context={note} />;
}
