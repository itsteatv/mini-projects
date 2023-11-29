import ReactSelect from "react-select/creatable";
import ButtonGroups from "./UI/ButtonGroups";
import { useRef, useState } from "react";
import { NoteData, Tag } from "./Types/types";
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from "react-router-dom";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  allAvailableTags: Tag[];
};

export function NoteForm({
  onSubmit,
  onAddTag,
  allAvailableTags,
}: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const navigate = useNavigate();

  const onHandleSubmit = function (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });

    navigate("..");
  };

  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <h1 className="text-4xl font-Ubuntu text-center mb-4 font-medium text-[#07074D]">
            New Note
          </h1>
          <form onSubmit={onHandleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="font-Ubuntu mb-3 block text-base font-medium text-[#07074D]"
              >
                Title
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                ref={titleRef}
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
                onCreateOption={(label) => {
                  const newTag = { id: uuidV4(), label };
                  onAddTag(newTag);
                  setSelectedTags((prev) => [...prev, newTag]);
                }}
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
            <div className="mb-5">
              <label
                htmlFor="message"
                className="font-Ubuntu mb-3 block text-base font-medium text-[#07074D]"
              >
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                id="message"
                placeholder="Type your message"
                ref={markdownRef}
                className="w-full resize-none rounded-md border border-[#cccccc] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#2684FF] focus:shadow-md placeholder:font-Ubuntu"
                defaultValue={""}
              />
            </div>
            <ButtonGroups firstButton="Submit" secButton="Cancel" />
          </form>
        </div>
      </div>
    </>
  );
}
