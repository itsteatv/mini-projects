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
    <>
      <div className="min-h-screen flex items-center justify-center text-center text-white font-Ubuntu">
        <figure>
          <blockquote className="p-6 text-lg leading-relaxed">
            <cite className="text-left not-italic">
              <div className="flex justify-between >=345px:flex-col >=345px:items-center ml-1 text-white font-bold text-2xl">
                {note?.title}
                <span className="font-bold uppercase">
                  {note?.tags?.length > 0 &&
                    note?.tags.map((tag) => (
                      <span
                        className="font-bold uppercase badge badge-outline"
                        key={tag?.id}
                      >
                        {tag?.label}
                      </span>
                    ))}
                </span>
              </div>
            </cite>
            <Markdown className="mt-10 text-left">{note?.markdown}</Markdown>
          </blockquote>
          <figcaption className="p-6 pt-2 text-sm text-sky-500">
            <div className="flex flex-col justify-center gap-1 mx-auto"></div>
            <ButtonGroups
              handleDeleteNote={handleDeleteNote}
              id={note.id}
              firstButton={{
                label: "Edit",
                onClick: () => navigate(`/${note?.id}/edit`),
                className: "font-Ubuntu btn btn-primary dark:text-white",
              }}
              secButton={{
                label: "Delete",
                className: "font-Ubuntu btn btn-error dark:text-white",
              }}
              thirdButton={{
                label: "Back",
                onClick: () => navigate("/"),
                className:
                  "font-Ubuntu btn btn-active btn-ghost dark:text-white",
              }}
            />
          </figcaption>
        </figure>
      </div>
    </>
  );
}
