import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid";
import { cx } from "class-variance-authority";

import Button from "../Button";
import Image from "../Image";

import useBookStore from "@/hooks/useBookStore";

import { BookType } from "@/types";

type BookCardProps = {
  book: BookType;
  className?: string;
};

const BookCard = ({ className, book }: BookCardProps) => {
  const { matchedBook, toggleBookmark } = useBookStore(book);

  return (
    <div
      className={cx(
        className,
        "relative",
        "cursor-pointer rounded-lg p-2",
        "hover:bg-blue-200 hover:shadow-lg",
        "transition-all"
      )}
    >
      <Button
        size="small"
        className={cx(
          "absolute z-[2] flex rounded-full",
          "top-[14px] right-[14px] md:top-[18px] md:right-[18px]"
        )}
        onClick={toggleBookmark}
      >
        {matchedBook ? (
          <FilledStarIcon className={cx("h-5 w-5", "md:w-6 md:h-6", "text-yellow-300")} />
        ) : (
          <StarIcon className={cx("h-5 w-5", "md:w-6 md:h-6")} />
        )}
      </Button>
      <Image
        src={book.cover_url}
        effect="black-and-white"
        className={cx("w-full h-auto", "shadow-xl", "mb-1 md:mb-2")}
      />
      <p className={cx("font-semibold", "text-base", "line-clamp-1 md:line-clamp-2")}>
        {book.title}
      </p>
      <p className={cx("text-sm", "line-clamp-1")}>by {book.authors.join(", ")}</p>
    </div>
  );
};

export default BookCard;
