import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="grid h-screen place-content-center px-4 gap-4">
      <h1 className="uppercase tracking-widest text-white">404 | Not Found</h1>
      <button
        onClick={goBackHome}
        className="inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded-full focus-visible:outline-none whitespace-nowrap bg-violet-500 hover:bg-violet-600 focus:bg-violet-700 disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300 disabled:shadow-none"
      >
        Go Back Home
      </button>
    </div>
  );
}

export default PageNotFound;
