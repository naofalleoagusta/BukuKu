import { StateCreator } from "zustand";

import { BookType } from "@/types";

export type BookmarkedBookSliceType = {
  books: Record<string, BookType>;
  addBook: (book: BookType) => void;
  removeBook: (bookId: number) => void;
};

export const KEY_BOOKMARK = "BOOKMARK_BOOKS";

const createBookmarkedBookSlice: StateCreator<BookmarkedBookSliceType> = (set) => ({
  books: JSON.parse(localStorage.getItem(KEY_BOOKMARK) || "{}")?.state || {},
  addBook: (book) => set((state) => ({ books: { ...state.books, [book.id]: book } })),
  removeBook: (bookId) =>
    set((state) => {
      if (state.books[bookId]) {
        delete state.books[bookId];
      }
      return {
        books: state.books,
      };
    }),
});

export default createBookmarkedBookSlice;
