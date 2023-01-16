import { BookType } from "@/types";

const filterBooks = (books: BookType[], query: string) =>
  books.filter(
    (book) =>
      book.title.toLocaleLowerCase().includes(query) ||
      book.authors.some((author) => author.toLowerCase().includes(query))
  );

export default filterBooks;
