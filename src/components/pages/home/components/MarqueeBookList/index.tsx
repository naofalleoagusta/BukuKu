import useFetchBooks from "@/hooks/useFechBooks";
import { cx } from "class-variance-authority";
import MarqueeBookCard from "../MarqueeBookCard";

const MarqueeBookList = () => {
  const { data: books, error, loading } = useFetchBooks({ categoryId: 1 });
  if (error) {
    return <div>Something is wrong</div>;
  }
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div
      className={cx(
        "relative",
        "flex",
        "overflow-x-hidden",
        "group",
        "translate-y-[-85px] md:translate-y-[-70px]"
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
