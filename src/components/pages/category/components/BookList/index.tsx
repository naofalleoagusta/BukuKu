import { useParams } from "react-router-dom";
import { cx } from "class-variance-authority";

import BookCard from "@/components/ui_palette/BookCard";
import Button from "@/components/ui_palette/Button";
import { ChevronLeft, ChevronRight } from "@/components/icons";
import Section from "@/components/ui_palette/Section";

import useFetchBooks from "@/hooks/useFechBooks";

import { PageInfoType } from "../../types";
import { memo, useEffect, useMemo, useState } from "react";
import { BookType } from "@/types";
import addFetchedBooks from "../../helpers/addFetchedBooks";

type BookListProps = {
  pageInfo: PageInfoType;
  handleChangePage: (target: number) => void;
};

const BookList = ({ pageInfo, handleChangePage }: BookListProps) => {
  const { id } = useParams<{ id: string }>();
  const [fetchedBooks, setFetchedBooks] = useState<BookType[]>([]);

  const { data: books, error } = useFetchBooks({
    categoryId: parseInt(id || "0"),
    page: pageInfo.page,
    size: pageInfo.size,
  });

  const filteredBooks = useMemo(() => {
    const query = pageInfo.query.toLowerCase();
    return fetchedBooks.filter(
      (book) =>
        book.title.toLocaleLowerCase().includes(query) ||
        book.authors.some((author) => author.toLowerCase().includes(query))
    );
  }, [fetchedBooks, pageInfo.query]);

  useEffect(() => {
    if (books?.length) {
      setFetchedBooks((prev) => addFetchedBooks({ prevBooks: prev, newBooks: books }));
    }
  }, [books]);

  if (error) {
    return <div>Something is wrong</div>;
  }

  if (!books) {
    return <div>loading</div>;
  }

  return (
    <Section>
      <div
        className={cx(
          "grid",
          "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
          "gap-2 md:gap-4",
          "translate-y-[-50px]"
        )}
      >
        {pageInfo.query ? (
          !!filteredBooks.length ? (
            filteredBooks.map((book) => <BookCard key={`book-${book.id}`} book={book} />)
          ) : (
            <h2 className={cx("col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5", "pt-[70px]")}>
              {" "}
              Sorry, no record exist containing &quot;{pageInfo.query}&quot;
            </h2>
          )
        ) : (
          books.map((book) => <BookCard key={`book-${book.id}`} book={book} />)
        )}
      </div>
      {!pageInfo.query && (
        <div className={cx("flex gap-4", "items-center", "justify-end", "mb-4")}>
          <Button
            size="small"
            intent={pageInfo.page ? "primary" : "disabled"}
            onClick={() => handleChangePage(pageInfo.page - 1)}
          >
            <ChevronLeft size="large" />
          </Button>
          <span className="font-semibold">{pageInfo.page + 1}</span>
          <Button
            size="small"
            intent={books.length === pageInfo.size ? "primary" : "disabled"}
            onClick={() => handleChangePage(pageInfo.page + 1)}
          >
            <ChevronRight size="large" />
          </Button>
        </div>
      )}
    </Section>
  );
};

export default memo(BookList);
