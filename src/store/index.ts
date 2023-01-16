import { create } from "zustand";
import { persist } from "zustand/middleware";

import createBookmarkedBookSlice, {
  BookmarkedBookSliceType,
  KEY_BOOKMARK,
} from "./slices/bookmarkedBook";

const useStore = create<BookmarkedBookSliceType>()(
  persist(
    (...state) => ({
      ...createBookmarkedBookSlice(...state),
    }),
    {
      name: KEY_BOOKMARK,
      partialize: (state) => state.books,
    }
  )
);

export default useStore;
