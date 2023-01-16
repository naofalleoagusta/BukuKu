import useStore from "@/store";

import { BookType } from "@/types";

const useDialogBookStore = (book?: BookType) => {
  const { dialogBook, setDialogBook } = useStore((state) => ({
    dialogBook: state.dialogBook,
    setDialogBook: state.setDialogBook,
  }));

  const toggleDialogBook = () => {
    setDialogBook(book);
  };

  return { dialogBook, toggleDialogBook };
};

export default useDialogBookStore;
