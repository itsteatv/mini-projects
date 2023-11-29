export default function NoteCardList() {
  return (
    <section className="flex flex-col justify-center gap-y-4 antialiased text-gray-600 font-Ubuntu">
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
                    Simple Design Tips
                  </h2>
                  <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                    {/* <button className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100">
                      <svg
                        className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-300 group-hover:text-gray-200"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14.682 2.318A4.485 4.485 0 0 0 11.5 1 4.377 4.377 0 0 0 8 2.707 4.383 4.383 0 0 0 4.5 1a4.5 4.5 0 0 0-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 0 1 4.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 0 1 1.785 4.251h-.003Z" />
                      </svg>
                      <span>
                        498 <span className="sr-only">likes</span>
                      </span>
                    </button> */}
                    {/* <button className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100">
                      <svg
                        className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-300 group-hover:text-gray-200"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7Zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8Z" />
                      </svg>
                      <span>
                        64 <span className="sr-only">comments</span>
                      </span>
                    </button> */}
                  </div>
                </div>
                <div className="flex items-end justify-between whitespace-normal">
                  <div className="max-w-md text-indigo-100">
                    <p className="mb-2">
                      Lorem ipsum dolor sit amet, consecte adipiscing elit sed
                      do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                  </div>
                  {/* <a className="flex-shrink-0 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2">
                    <span className="block font-bold">
                      <span className="sr-only">Read more</span> -&gt;
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
