import SearchBanner from "@/components/ui_palette/SearchBanner";
import { useState } from "react";
import BookmarkList from "./BookmarkList";

const BookmarkPage = () => {
  const [query, setQuery] = useState("");

  const handleChangeQuery = (param: string) => setQuery(param);
  return (
    <>
      <SearchBanner handleChangeQuery={handleChangeQuery} query={query} title="Bookmark" />
      <BookmarkList query={query.toLowerCase()} />
    </>
  );
};

export default BookmarkPage;
