import { Tag } from "../types/types";
import { useNavigate } from "react-router-dom";
import Markdown from "react-markdown";

type NoteCardListProps = {
  id: string;
  title: string;
  markdown: string;
  tags: Tag[];
};

const NoteCardList: React.FC<NoteCardListProps> = ({
  id,
  title,
  markdown,
  tags,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        key={id}
        className="overflow-hidden rounded bg-base-100 shadow-xl dark:text-white hover:bg-[#1c2026] transition duration-300"
      >
        <div className="p-6">
          <header className="mb-4 flex gap-4">
            <div>
              <h3 className="font-Ubuntu text-xl mx-1 font-medium dark:text-white">
                {title}
              </h3>
              {tags.map((tag) => {
                return (
                  <p className="font-Ubuntu font-bold mx-1 mt-4 badge badge-outline">
                    {tag.label}
                  </p>
                );
              })}
            </div>
          </header>
          <Markdown className="font-Ubuntu mx-1">{markdown}</Markdown>
        </div>
        <div className="flex justify-end gap-2 p-2 pt-0">
          <button
            onClick={() => navigate(`/${id}`)}
            className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-[#1a1e23] hover:text-white focus:bg-[#1c2026] focus:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:text-gray-200 disabled:shadow-none disabled:hover:bg-transparent"
          >
            <span>Read more</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NoteCardList;
