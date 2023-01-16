import BookSection from "../BookSection";

import useFetchBooks from "@/hooks/useFechBooks";

type BookListProps = {
  title: string;
  categoryId: number;
};

const BookList = ({ title, categoryId }: BookListProps) => {
  const { data: books, error } = useFetchBooks({ categoryId, size: 6 });

  if (error) {
    return <div>something wrong</div>;
  }
  if (!books) {
    return <div>loading</div>;
  }
  return <BookSection books={books} pathname={`category/${categoryId}`} title={title} />;
};

export default BookList;
