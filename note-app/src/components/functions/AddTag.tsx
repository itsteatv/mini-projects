import { Tag } from "../Types/types";

export const AddTag = (tag: Tag, prevTags: Tag[]): Tag[] => {
  return [...prevTags, tag];
};
