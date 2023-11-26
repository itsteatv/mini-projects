export type Tags = {
  id: string;
  label: string;
};

export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tags[];
};
