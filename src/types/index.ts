export type BookType = {
  id: number;
  title: string;
  category_id: number;
  authors: string[];
  cover_url: string;
  description: string;
  sections: SectionType[];
  audio_length: number;
};

export type SectionType = {
  title: string;
  content: string;
};

export type CategoryType = {
  id: number;
  name: string;
};
