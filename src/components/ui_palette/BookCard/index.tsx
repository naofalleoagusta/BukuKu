import { BookType } from "@/types";
import { cx } from "class-variance-authority";
import Button from "../Button";
import Image from "../Image";

type BookCardProps = {
  book: BookType;
  className?: string;
};

const BookCard = ({ className, book }: BookCardProps) => {
  return (
    <div className={className}>
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
