import { cx } from "class-variance-authority";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as FilledStarIcon } from "@heroicons/react/24/solid";

import Button from "@/components/ui_palette/Button";
import Image from "@/components/ui_palette/Image";

import useBookStore from "@/hooks/useBookStore";

import { BookType } from "@/types";

type MarqueeBookCardProps = {
  book: BookType;
};

const widthClass = cx("w-[125px] sm:w-[150px] md:w-[200px]", "shrink-0");

const MarqueeBookCard = ({ book }: MarqueeBookCardProps) => {
  const { matchedBook, toggleBookmark } = useBookStore(book);
  return (
    <div className={cx("text-4xl", "mx-4 flex", "min-w-0")}>
      <div className={cx(widthClass, "relative")}>
        <Image
          src={book.cover_url}
          alt={`${book.title}'s Cover`}
          lazy={false}
          className={cx("object-cover", "w-full h-auto", "shadow-lg")}
        />
        <Button
          size="small"
          className={cx(
            "absolute z-[2] flex rounded-full",
            "top-[6px] left-[6px] md:top-[10px] md:left-[10px]"
          )}
          onClick={toggleBookmark}
        >
          {matchedBook ? (
            <FilledStarIcon className={cx("h-5 w-5", "md:w-6 md:h-6", "text-yellow-300")} />
          ) : (
            <StarIcon className={cx("h-5 w-5", "md:w-6 md:h-6")} />
          )}
        </Button>
      </div>
      <div className={cx("py-4 md:py-5 md:pr-4", widthClass)}>
        <div
          className={cx(
            "bg-white",
            "w-full h-full p-2 md:p-4",
            "shadow-lg rounded-r-lg",
            "overflow-hidden",
            "relative",
            "flex flex-col justify-between"
          )}
        >
          <div>
            <h2
              className={cx(
                "w-full",
                "text-[15px] sm:text-base md:text-xl",
                "line-clamp-2 md:line-clamp-3 leading-5"
              )}
            >
              {book.title}
            </h2>
            <p className={cx("text-xs md:text-sm text-gray-400", "line-clamp-1 md:line-clamp-2")}>
              by : {book.authors?.[0] || "unknown"}
            </p>
            {book.sections?.[0].content && (
              <p
                className={cx("text-xs md:text-sm", "line-clamp-2 md:line-clamp-3", "mt-1 sm:mt-2")}
              >
                {book.sections[0].content}
              </p>
            )}
          </div>
          <Button
            fullWidth
            size="small"
            id={`marquee-book-${book.id}-btn`}
            data-identity={`marquee-book-${book.id}-btn`}
            aria-label={`${book.title}'s View Detail Button`}
          >
            View Detail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarqueeBookCard;
