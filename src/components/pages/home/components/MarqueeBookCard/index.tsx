import Button from "@/components/ui_palette/Button";
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
          lazy={false}
          className={cx("object-cover", "w-full h-auto", "shadow-lg")}
        />
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
