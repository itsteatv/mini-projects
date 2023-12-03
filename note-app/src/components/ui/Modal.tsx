import { Tag } from "../types/types";
import { MdDeleteForever } from "react-icons/md";

type ModalProps = {
  allAvailableTags: Tag[];
};

function Modal({ allAvailableTags }: ModalProps) {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Tags</h3>
          {allAvailableTags.map((tag) => (
            <form key={tag.id}>
              <div className="mt-4 flex items-center gap-4">
                <input
                  defaultValue={tag.label}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#cccccc] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2684FF] focus:shadow-md placeholder:font-Ubuntu"
                />
                <MdDeleteForever className="scale-150 cursor-pointer" />
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
