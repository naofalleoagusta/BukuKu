import { cx } from "class-variance-authority";

import useFetchBooks from "@/hooks/useFechBooks";

import MarqueeBookCard from "../MarqueeBookCard";
import Skeleton from "@/components/ui_palette/Skeleton";

const MarqueeBookList = () => {
  const { data: books, error } = useFetchBooks({ categoryId: 1 });

  if (error) {
    return <div>Something is wrong</div>;
  }

  if (!books) {
    return (
      <div
        className={cx(
          "relative",
          "flex",
          "overflow-x-hidden",
          "group",
          "translate-y-[-60px] md:translate-y-[-70px]"
        )}
      >
        {[...Array(2)].map((_, idx) => (
          <div
            key={`marquee-${idx}`}
            className={cx(
              idx === 0 ? "animate-marquee" : "absolute animate-marquee2",
              "flex",
              "group-hover:pause"
            )}
          >
            {[...Array(5)].map((_, idx) => (
              <Skeleton
                key={`marquee-skeleton-${idx}`}
                className={cx(
                  "w-[200px] sm:w-[250px] md:w-[300px] h-[150px] sm:h-[220px] md:h-[300px]",
                  "shrink-0",
                  "mx-4"
                )}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cx(
        "relative",
        "flex",
        "overflow-x-hidden",
        "group",
        "translate-y-[-60px] md:translate-y-[-70px]"
      )}
    >
      {[...Array(2)].map((_, idx) => (
        <div
          key={`marquee-${idx}`}
          className={cx(
            idx === 0 ? "animate-marquee" : "absolute animate-marquee2",
            "flex",
            "group-hover:pause"
          )}
        >
          {books?.map((book) => (
            <MarqueeBookCard book={book} key={book.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MarqueeBookList;
