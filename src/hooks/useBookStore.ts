import useStore from "@/store";

import { BookType } from "@/types";

const useBookStore = (book?: BookType) => {
  const { books, addBook, removeBook } = useStore((state) => ({
    books: state.books,
    addBook: state.addBook,
    removeBook: state.removeBook,
  }));

  const matchedBook = books[book?.id ?? ""];

  const convertedBooks = Object.entries(books).map((book) => book[1]);

  const toggleBookmark = () => {
    if (book) {
      if (matchedBook) {
        removeBook(book.id);
        return;
      }
      addBook(book);
    }
  };

  return { toggleBookmark, matchedBook, books: convertedBooks };
};

export default useBookStore;
