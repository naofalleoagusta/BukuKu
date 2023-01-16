import { cx } from "class-variance-authority";
import { useMemo } from "react";
import { Link } from "react-router-dom";

import BookCard from "@/components/ui_palette/BookCard";
import Section from "@/components/ui_palette/Section";

import useBookStore from "@/hooks/useBookStore";
import filterBooks from "../../../category/helpers/filterBooks";

import { EMPTY_BOOKMARK_PLACEHOLDER } from "../../constant";

type BookmarkListProps = {
  query: string;
};

const BookmarkList = ({ query }: BookmarkListProps) => {
  const { books } = useBookStore();
  const filteredBooks = useMemo(() => {
    if (!!query) {
      return filterBooks(books, query);
    }
    return books;
  }, [books, query]);
  return (
    <Section>
      {filteredBooks.length ? (
        <div
          className={cx(
            "grid",
            "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
            "translate-y-[-50px]"
          )}
        >
          {filteredBooks.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      ) : (
        <div className="pt-[50px]">
          {query ? (
            <h2>Sorry, no record exist containing &quot;{query}&quot;</h2>
          ) : (
            <h2>
              {EMPTY_BOOKMARK_PLACEHOLDER}{" "}
              <Link to="/" className="underline">
                Browse Book
              </Link>{" "}
              ?
            </h2>
          )}
        </div>
      )}
    </Section>
  );
};

export default BookmarkList;
