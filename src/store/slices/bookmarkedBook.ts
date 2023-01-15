import { StateCreator } from "zustand";

import { BookType } from "@/types";

export type BookmarkedBookSliceType = {
  books: BookType[];
  addBook: (book: BookType) => void;
  removeBook: (bookId: number) => void;
};

const createBookmarkedBookSlice: StateCreator<BookmarkedBookSliceType> = (set) => ({
  books: [],
  addBook: (book) => set((state) => ({ books: [...state.books, book] })),
  removeBook: (bookId) =>
    set((state) => ({ books: state.books.filter((book) => book.id !== bookId) })),
});

export default createBookmarkedBookSlice;
