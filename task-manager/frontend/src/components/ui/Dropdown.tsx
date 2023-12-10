import { CgAdd, CgMoreVerticalAlt } from "react-icons/cg";
import { useState, useEffect } from "react";
import Modal from "./AddTasksModal";

export default function Dropdown() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const modalElement = document.getElementById("my_modal_3");

    if (isModalOpen && modalElement) {
      modalElement.showModal();
    }
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="dropdown dropdown-end">
        <div className="text-black">
          <CgMoreVerticalAlt tabIndex={0} role="button" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] mt-[0.25rem] menu p-2 shadow bg-white rounded-box"
        >
          <div className="flex gap-2 text-black cursor-pointer">
            <CgAdd
              onClick={() => {
                setIsModalOpen(true);
              }}
            />
          </div>
        </ul>
      </div>

      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
}
