import { useNote } from "./hooks/useNote";

export function Note() {
  const note = useNote();

  console.log(note);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <div className="text-2xl leading-snug font-extrabold text-black truncate mb-1 sm:mb-0">
        ID: {note.id}
      </div>
      <div className="text-2xl leading-snug font-extrabold text-black truncate mb-1 sm:mb-0">
        TITLE: {note.title}
      </div>
      <div className="text-2xl leading-snug font-extrabold text-black truncate mb-1 sm:mb-0">
        MARKDOWN TEXT: {note.markdown}
      </div>
      {note.tags.length > 0 &&
        note.tags.map((tag) => (
          <h2
            className="text-2xl leading-snug font-extrabold text-black truncate mb-1 sm:mb-0"
            key={tag.id}
          >
            TAG LABEL: {tag.label}
          </h2>
        ))}
    </div>
  );
}
