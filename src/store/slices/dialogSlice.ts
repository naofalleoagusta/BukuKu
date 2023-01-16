import { StateCreator } from "zustand";

import { BookType } from "@/types";

export type DialogBookSliceType = {
  dialogBook: BookType | undefined;
  setDialogBook: (book?: BookType) => void;
};

const createDialogBookSlice: StateCreator<DialogBookSliceType> = (set) => ({
  dialogBook: undefined,
  setDialogBook: (book) => set((state) => ({ dialogBook: state.dialogBook ? undefined : book })),
});

export default createDialogBookSlice;
