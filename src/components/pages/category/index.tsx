import { useCallback, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import Banner from "./components/Banner";
import BookList from "./components/BookList";
import { PageInfoType } from "./types";

const Category = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const [pageInfo, setPageInfo] = useState<PageInfoType>({
    page:
      parseInt(searchParams.get("page") || "0") >= 0
        ? parseInt(searchParams.get("page") || "0")
        : 0,
    size: 10,
    query: searchParams.get("q") || "",
  });

  const handleChangePage = (target: number) => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    searchParams.set("page", target.toString());
    setSearchParams(searchParams);
    setTimeout(() => {
      setPageInfo((prev) => ({ ...prev, page: target }));
    }, 300);
  };

  const handleChangeQuery = useCallback((query: string) => {
    if (!query) {
      searchParams.delete("q");
    } else {
      searchParams.set("q", query);
    }
    setSearchParams(searchParams);
    setPageInfo((prev) => ({ ...prev, query }));
  }, []);

  return (
    <>
      <Banner handleChangeQuery={handleChangeQuery} query={pageInfo.query} />
      <BookList pageInfo={pageInfo} handleChangePage={handleChangePage} />
    </>
  );
};

export default Category;
