import BookSection from "../BookSection";

import useBookStore from "@/hooks/useBookStore";

import { EMPTY_BOOKMARK_PLACEHOLDER } from "@/components/pages/bookmark/constant";

const BookmarkList = () => {
  const { books } = useBookStore();
  return (
    <BookSection
      books={books}
      pathname="bookmark"
      title="Your Bookmark List"
      threshold={5}
      emptyPlaceholder={EMPTY_BOOKMARK_PLACEHOLDER}
    />
  );
};

export default BookmarkList;
