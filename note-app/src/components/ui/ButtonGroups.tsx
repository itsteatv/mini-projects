import { useNavigate } from "react-router-dom";

export default function ButtonGroups() {
  const navigate = useNavigate();

  return (
    <>
      <div className=">=345px:flex-col flex gap-4 justify-end">
        <button
          type="button"
          className="font-Ubuntu hover:shadow-form rounded-md bg-[#6A64F1] hover:bg-[#4f46e5] transition py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
        <button
          type="reset"
          onClick={() => navigate("..")}
          className="font-Ubuntu hover:shadow-form rounded-md bg-[#64748b] hover:bg-[#475569] transition py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Cancel
        </button>
      </div>
    </>
  );
}
