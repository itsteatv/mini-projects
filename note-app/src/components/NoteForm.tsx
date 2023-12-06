import ReactSelect from "react-select/creatable";
import ButtonGroups from "./ui/ButtonGroups";
import { useRef, useState, useEffect } from "react";
import { NoteData, Tag } from "./types/types";
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from "react-router-dom";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  allAvailableTags: Tag[];
} & Partial<NoteData>;

export function NoteForm({
  onSubmit,
  onAddTag,
  allAvailableTags,
  title = "",
  markdown = "",
  tags = [],
}: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(
      !!titleRef.current?.value &&
        !!markdownRef.current?.value &&
        selectedTags.length > 0
    );
  }, [titleRef.current?.value, markdownRef.current?.value, selectedTags]);

  const onHandleSubmit = function (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });

    navigate("..");
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Enable/disable the submit button based on form validity
    setIsFormValid(
      !!titleRef.current?.value &&
        !!markdownRef.current?.value &&
        selectedTags.length > 0
    );
  };

  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <h1 className="text-4xl font-Ubuntu text-center mb-4 font-medium dark:text-white text-[#07074D]">
            New Note
          </h1>
          <form onSubmit={onHandleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="font-Ubuntu mb-3 block text-base font-medium dark:text-white text-[#07074D]"
              >
                Title
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                ref={titleRef}
                defaultValue={title}
                onChange={handleInputChange}
                className="input input-bordered w-full placeholder:font-Ubuntu"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="font-Ubuntu mb-3 block text-base font-medium dark:text-white text-[#07074D]"
              >
                Tags
              </label>
              <ReactSelect
                defaultValue={tags}
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
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary25: "black",
                    primary: "black",
                  },
                })}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="font-Ubuntu mb-3 block text-base font-medium dark:text-white text-[#07074D]"
              >
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                id="message"
                placeholder="Type your message"
                ref={markdownRef}
                defaultValue={markdown}
                onChange={handleInputChange}
                className="w-full resize-none textarea textarea-bordered placeholder:font-Ubuntu"
              />
            </div>
            <ButtonGroups
              firstButton={{
                label: "Submit",
                className: `font-Ubuntu btn btn-primary dark:text-white ${
                  !isFormValid ? "btn-disabled cursor-not-allowed" : ""
                }`,
              }}
              secButton={{
                label: "Cancel",
                className:
                  "font-Ubuntu btn btn-active btn-ghost dark:text-white",
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
}
