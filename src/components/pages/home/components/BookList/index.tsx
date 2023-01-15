import { cx } from "class-variance-authority";
import { Link } from "react-router-dom";

import Section from "@/components/ui_palette/Section";
import Button from "@/components/ui_palette/Button";
import useFetchBooks from "@/hooks/useFechBooks";
import BookCard from "@/components/ui_palette/BookCard";

type BookListProps = {
  title: string;
  categoryId: number;
};

const BookList = ({ title, categoryId }: BookListProps) => {
  const { data: books, error } = useFetchBooks({ categoryId, size: 6 });

  const hasMoreBooks = (books?.length || 0) > 5;
  if (error) {
    return <div>something wrong</div>;
  }
  if (!books) {
    return <div>loading</div>;
  }
  return (
    <Section className="overflow-hidden">
      <div className={cx("py-[30px]", "relative")}>
        <div className={cx("flex", "z-[2] relative", "items-center")}>
          <h2 className={cx("grow", "line-clamp-2 md:line-clamp-none")}>{title}</h2>
          {hasMoreBooks && (
            <Link
              to={`/category/${categoryId}`}
              state={{ category: { id: categoryId, name: title } }}
              className="shrink-0"
            >
              <Button intent="secondary">View All</Button>
            </Link>
          )}
        </div>
        <span
          className={cx(
            "absolute z-[1]",
            "text-6xl md:text-8xl font-bold text-gray-200",
            "top-[50px] md:top-[40px] left-[40px]",
            "whitespace-nowrap",
            "opacity-4"
          )}
        >
          {title}
        </span>
        <div
          className={cx(
            "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5",
            "z-[1] relative",
            "mt-10",
            "gap-4"
          )}
        >
          {(hasMoreBooks ? books.slice(0, books.length - 1) : books).map((book) => (
            <BookCard book={book} key={`book-${book.id}`} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BookList;
