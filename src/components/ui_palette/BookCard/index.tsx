import { BookType } from "@/types";
import { cx } from "class-variance-authority";
import Image from "../Image";

type BookCardProps = {
  book: BookType;
};

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div>
      <Image
        src={book.cover_url}
        effect="black-and-white"
        className={cx("w-full h-auto", "shadow-xl")}
      />
    </div>
  );
};

export default BookCard;
