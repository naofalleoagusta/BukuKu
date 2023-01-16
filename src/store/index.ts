import { create } from "zustand";
import { persist } from "zustand/middleware";

import createBookmarkedBookSlice, {
  BookmarkedBookSliceType,
  KEY_BOOKMARK,
} from "./slices/bookmarkedBook";
import createDialogBookSlice, { DialogBookSliceType } from "./slices/dialogSlice";

const useStore = create<BookmarkedBookSliceType & DialogBookSliceType>()(
  persist(
    (...state) => ({
      ...createBookmarkedBookSlice(...state),
      ...createDialogBookSlice(...state),
    }),
    {
      name: KEY_BOOKMARK,
      partialize: (state) => state.books,
    }
  )
);

export default useStore;
