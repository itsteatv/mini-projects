import { Tag } from "../types/types";

export const UpdateTag = (tags: Tag[], id: string, label: string): Tag[] => {
  return tags.map((tag) => (tag.id === id ? { ...tag, label: label } : tag));
};
