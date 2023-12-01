import { Tag } from "../types/types";

export const AddTag = (tag: Tag, prevTags: Tag[]): Tag[] => {
  return [...prevTags, tag];
};
