import { Tag } from "../types/types";
import { MdDeleteForever } from "react-icons/md";

type ModalProps = {
  allAvailableTags: Tag[];
  handleDeleteTag(id: string): void;
  handleUpdateTag(id: string, label: string): void;
};

function Modal({
  allAvailableTags,
  handleDeleteTag,
  handleUpdateTag,
}: ModalProps) {
  console.log(allAvailableTags);

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Tags</h3>
          {allAvailableTags.map((tag) => (
            <form key={tag.id}>
              <div className="mt-4 flex items-center gap-4">
                <input
                  value={tag.label}
                  onChange={(e) => handleUpdateTag(tag.id, e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#cccccc] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2684FF] focus:shadow-md placeholder:font-Ubuntu"
                />
                <MdDeleteForever
                  onClick={() => handleDeleteTag(tag.id)}
                  className="scale-150 cursor-pointer"
                />
              </div>
            </form>
          ))}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
