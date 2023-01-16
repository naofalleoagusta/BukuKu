import { cx } from "class-variance-authority";
import { Link } from "react-router-dom";

import Section from "@/components/ui_palette/Section";
import Button from "@/components/ui_palette/Button";
import BookCard from "@/components/ui_palette/BookCard";

import { BookType } from "@/types";

type BookSectionProps = {
  title: string;
  books: BookType[];
  pathname: string;
  threshold?: number;
  emptyPlaceholder?: string;
};

const BookSection = ({
  title,
  books,
  pathname,
  threshold,
  emptyPlaceholder = "No Record Found",
}: BookSectionProps) => {
  const hasMoreBooks = (books.length || 0) > 5;
  return (
    <Section className="overflow-hidden" wrapperClassName={cx("pr-0")}>
      <div className={cx("py-[30px]", "relative")}>
        <div
          className={cx("flex", "z-[2] relative", "items-center", "min-h-[36px] md:min-h-[40px]")}
        >
          <h2 className={cx("grow", "line-clamp-2 md:line-clamp-none", "break-all")}>{title}</h2>
          {hasMoreBooks && (
            <Link to={pathname} className="shrink-0">
              <Button intent="secondary">View All</Button>
            </Link>
          )}
        </div>
        <span
          className={cx(
            "absolute z-[1]",
            "text-6xl md:text-8xl font-bold text-gray-200",
            "top-[40px] left-[40px]",
            "whitespace-nowrap",
            "opacity-4"
          )}
        >
          {title}
        </span>
        {books.length ? (
          <div
            className={cx(
              "flex lg:grid lg:grid-cols-5",
              "overflow-x-auto lg:overflow-x-hidden",
              "z-[1] relative",
              "mt-6 md:mt-10",
              "pb-4"
            )}
          >
            {(hasMoreBooks ? books.slice(0, threshold || books.length - 1) : books).map((book) => (
              <BookCard
                book={book}
                key={`book-${book.id}`}
                className={cx("basis-[150px] md:basis-[250px] shrink-0")}
              />
            ))}
          </div>
        ) : (
          <h3 className={cx("z-[1] relative", "mt-6 md:mt-10", "pb-4")}>{emptyPlaceholder}</h3>
        )}
      </div>
    </Section>
  );
};

export default BookSection;
