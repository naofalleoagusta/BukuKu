import Image from "@/components/ui_palette/Image";
import { BookType } from "@/types";
import { cx } from "class-variance-authority";

type MarqueeBookCardProps = {
  book: BookType;
};

const widthClass = cx("w-[125px] sm:w-[150px] md:w-[200px]", "shrink-0");

const MarqueeBookCard = ({ book }: MarqueeBookCardProps) => {
  return (
    <div className={cx("text-4xl", "mx-4 flex", "min-w-0")}>
      <div className={widthClass}>
        <Image
          src={book.cover_url}
          alt={`${book.title}'s Cover`}
          className={cx("object-cover", "w-full h-auto")}
        />
      </div>
      <div className={cx("py-4 md:py-5 md:pr-4", widthClass)}>
        <div
          className={cx(
            "bg-white",
            "w-full h-full p-2 md:p-4",
            "shadow-md rounded-r-lg",
            "overflow-hidden"
          )}
        >
          <h2
            className={cx(
              "w-full",
              "text-[15px] sm:text-base md:text-xl line-clamp-2 md:line-clamp-3"
            )}
          >
            {book.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MarqueeBookCard;
