import { Tag } from "../types/types";
import { useNavigate } from "react-router-dom";

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
    <section
      key={id}
      className="flex flex-col justify-center gap-y-4 antialiased text-gray-600 font-Ubuntu"
    >
      <div className="h-full">
        <div className="max-w-2xl mx-auto bg-blue-600 shadow-lg rounded-lg hover:bg-blue-700 transition">
          <div className="px-6 py-5">
            <div className="flex items-start">
              <svg
                className="fill-current flex-shrink-0 mr-5"
                width={30}
                height={30}
                viewBox="0 0 30 30"
              >
                <path
                  className="text-indigo-300"
                  d="m16 14.883 14-7L14.447.106a1 1 0 0 0-.895 0L0 6.883l16 8Z"
                />
                <path
                  className="text-indigo-200"
                  d="M16 14.619v15l13.447-6.724A.998.998 0 0 0 30 22V7.619l-14 7Z"
                />
                <path
                  className="text-indigo-500"
                  d="m16 14.619-16-8V21c0 .379.214.725.553.895L16 29.619v-15Z"
                />
              </svg>
              <div className="flex-grow truncate">
                <div className="w-full sm:flex justify-between items-center mb-3">
                  <h2 className="text-2xl leading-snug font-extrabold text-white truncate mb-1 sm:mb-0">
                    {title}
                  </h2>
                  {tags.map((tag) => {
                    return (
                      <h2 className="text-2xl leading-snug font-extrabold text-white truncate mb-1 sm:mb-0">
                        {tag.label}
                      </h2>
                    );
                  })}
                  <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2"></div>
                </div>
                <div className="flex items-end justify-between whitespace-normal">
                  <div className="max-w-md text-indigo-100">
                    <p className="mb-2">{markdown}</p>
                  </div>
                </div>
                <div
                  onClick={() => navigate(`/${id}`)}
                  className="flex-shrink-0 flex items-center justify-center text-indigo-600 cursor-pointer w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2"
                >
                  <span className="block font-bold">
                    <span className="sr-only">Read more</span> -&gt;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoteCardList;
