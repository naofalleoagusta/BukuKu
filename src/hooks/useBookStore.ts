import useStore from "@/store";

import { BookType } from "@/types";

const useBookStore = (book: BookType) => {
  const { books, addBook, removeBook } = useStore((state) => ({
    books: state.books,
    addBook: state.addBook,
    removeBook: state.removeBook,
  }));

  const matchedBook = books[book.id];

  const toggleBookmark = () => {
    if (matchedBook) {
      removeBook(book.id);
      return;
    }
    addBook(book);
  };

  return { toggleBookmark, matchedBook };
};

export default useBookStore;
