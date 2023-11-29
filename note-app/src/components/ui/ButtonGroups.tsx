import { useNavigate } from "react-router-dom";

type ButtonGroupsProps = {
  firstButton: string;
  secButton: string;
};

export default function ButtonGroups({
  firstButton,
  secButton,
}: ButtonGroupsProps) {
  const navigate = useNavigate();

  return (
    <>
      <div className=">=345px:flex-col >=445px:flex-col flex gap-4 justify-end">
        <button
          type="submit"
          className="font-Ubuntu hover:shadow-form rounded-md bg-blue-600 hover:bg-blue-700 transition py-3 px-8 text-base font-semibold text-white outline-none"
        >
          {firstButton}
        </button>
        <button
          type="reset"
          onClick={() => navigate("..")}
          className="font-Ubuntu hover:shadow-form rounded-md bg-[#64748b] hover:bg-[#475569] transition py-3 px-8 text-base font-semibold text-white outline-none"
        >
          {secButton}
        </button>
      </div>
    </>
  );
}
