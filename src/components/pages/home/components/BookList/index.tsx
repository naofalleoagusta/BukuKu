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
  return (
    <BookSection
      books={books || []}
      pathname={`category/${categoryId}`}
      loading={!books}
      title={title}
    />
  );
};

export default BookList;
