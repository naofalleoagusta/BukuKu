import { BookType } from "@/types";

type AddFetchedBooksType = {
  prevBooks: BookType[];
  newBooks: BookType[];
};

const addFetchedBooks = ({ prevBooks, newBooks }: AddFetchedBooksType) => {
  const tempBooks = [...prevBooks, ...newBooks];
  return [...new Map(tempBooks.map((book) => [book.id, book])).values()];
};

export default addFetchedBooks;
