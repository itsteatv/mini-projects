import { useNote } from "./hooks/useNote";
import { useNavigate } from "react-router-dom";
import ButtonGroups from "./ui/ButtonGroups";
import Markdown from "react-markdown";

type NoteProps = {
  handleDeleteNote(id: string): void;
};

export function Note({ handleDeleteNote }: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();

  console.log(note);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <div className="text-2xl leading-snug font-extrabold text-black truncate mb-1 sm:mb-0">
        ID: {note?.id}
      </div>
      <div className="text-2xl leading-snug font-extrabold text-black truncate mb-1 sm:mb-0">
        TITLE: {note?.title}
      </div>
      <div className="text-2xl leading-snug font-extrabold text-black truncate mb-1 sm:mb-0">
        MARKDOWN TEXT: {note?.markdown}
      </div>
      {note?.tags?.length > 0 &&
        note?.tags.map((tag) => (
          <h2
            className="text-2xl leading-snug font-extrabold text-black truncate mb-1 sm:mb-0"
            key={tag?.id}
          >
            TAG LABEL: {tag?.label}
          </h2>
        ))}
      <ButtonGroups
        handleDeleteNote={handleDeleteNote}
        id={note.id}
        firstButton={{
          label: "Edit",
          onClick: () => navigate(`/${note?.id}/edit`),
          className:
            "font-Ubuntu hover:shadow-form rounded-md bg-blue-600 hover:bg-blue-700 transition py-3 px-8 text-base font-semibold text-white outline-none",
        }}
        secButton={{
          label: "Delete",
          className:
            "font-Ubuntu hover:shadow-form rounded-md bg-red-600 hover:bg-red-700 transition py-3 px-8 text-base font-semibold text-white outline-none",
        }}
        thirdButton={{
          label: "Back",
          onClick: () => navigate("/"),
          className:
            "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
        }}
      />
      <Markdown className="mt-5">{note?.markdown}</Markdown>
    </div>
  );
}
