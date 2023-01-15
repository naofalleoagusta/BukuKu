import { create } from "zustand";
import { persist } from "zustand/middleware";

import createBookmarkedBookSlice, { BookmarkedBookSliceType } from "./slices/bookmarkedBook";

const useStore = create<BookmarkedBookSliceType>()(
  persist(
    (...state) => ({
      ...createBookmarkedBookSlice(...state),
    }),
    { name: "book-store" }
  )
);

export default useStore;
