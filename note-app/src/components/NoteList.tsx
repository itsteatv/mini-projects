import { useState } from "react";
import { Note, Tag } from "./types/types";
import { NoteFilter } from "./functions/NoteFilter";
import { useNavigate } from "react-router-dom";
import ReactSelect from "react-select";
import ButtonGroups from "./ui/ButtonGroups";
import NoteCardList from "./ui/NoteCardList";
import Modal from "./ui/Modal";

type NoteListProps = {
  allAvailableTags: Tag[];
  notes: Note[];
};

export function NoteList({ allAvailableTags, notes }: NoteListProps) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const filteredNotes = NoteFilter({ notes, title, selectedTags });

  return (
    <>
      <div className="flex items-center p-12 >=465px:flex-col">
        <div className="mx-auto w-full max-w-[550px]">
          <div className=">=465px:flex-col flex justify-between items-center mb-10">
            <h1 className=">=465px:text-center text-4xl font-Ubuntu text-left >=465px:mb-4 font-medium text-[#07074D]">
              Notes
            </h1>
            <ButtonGroups
              firstButton={{
                label: "Create",
                onClick: () => navigate("/new"),
                className:
                  "font-Ubuntu hover:shadow-form rounded-md bg-blue-600 hover:bg-blue-700 transition py-3 px-8 text-base font-semibold text-white outline-none",
              }}
              secButton={{
                label: "Edit Tags",
                onClick: () => {
                  setShowModal(true);
                  const modal = document.getElementById("my_modal_1");
                  if (modal) {
                    modal.showModal();
                  }
                },
                className:
                  "font-Ubuntu hover:shadow-form rounded-md bg-[#64748b] hover:bg-[#475569] transition py-3 px-8 text-base font-semibold text-white outline-none",
              }}
            />
          </div>
          <form className="mb-10">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="font-Ubuntu mb-3 block text-base font-medium text-[#07074D]"
              >
                Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#cccccc] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2684FF] focus:shadow-md placeholder:font-Ubuntu"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="font-Ubuntu mb-3 block text-base font-medium text-[#07074D]"
              >
                Tags
              </label>
              <ReactSelect
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                options={allAvailableTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
                isMulti
              />
            </div>
          </form>
          {filteredNotes.map((note) => (
            <NoteCardList
              id={note.id}
              title={note.title}
              markdown={note.markdown}
              tags={note.tags}
            />
          ))}
        </div>
      </div>
      {showModal && <Modal />}
    </>
  );
}
