import { useState } from "react";

import SearchBanner from "@/components/ui_palette/SearchBanner";
import BookmarkList from "./components/BookmarkList";
import useTitle from "@/hooks/useTitle";

const BookmarkPage = () => {
  const [query, setQuery] = useState("");

  useTitle("Bookmark");

  const handleChangeQuery = (param: string) => setQuery(param);
  return (
    <>
      <SearchBanner
        handleChangeQuery={handleChangeQuery}
        query={query}
        title="Bookmark"
        breadcrumbs={[
          {
            text: "Home",
            path: "/",
          },
          {
            text: "Bookmark",
            path: "",
          },
        ]}
      />
      <BookmarkList query={query.toLowerCase()} />
    </>
  );
};

export default BookmarkPage;
