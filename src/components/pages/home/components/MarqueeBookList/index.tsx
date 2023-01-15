import { cx } from "class-variance-authority";

import useFetchBooks from "@/hooks/useFechBooks";

import MarqueeBookCard from "../MarqueeBookCard";

const MarqueeBookList = () => {
  const { data: books, error } = useFetchBooks({ categoryId: 1 });
  if (error) {
    return <div>Something is wrong</div>;
  }
  if (!books) {
    return <div>loading</div>;
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
