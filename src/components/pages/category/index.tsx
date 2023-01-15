import { useCallback, useState } from "react";

import Banner from "./components/Banner";
import BookList from "./components/BookList";
import { PageInfoType } from "./types";

const Category = () => {
  const [pageInfo, setPageInfo] = useState<PageInfoType>({ page: 0, size: 10, query: "" });

  const handleChangePage = (target: number) => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    setTimeout(() => {
      setPageInfo((prev) => ({ ...prev, page: target }));
    }, 300);
  };

  const handleChangeQuery = useCallback(
    (query: string) => setPageInfo((prev) => ({ ...prev, query })),
    []
  );

  return (
    <>
      <Banner handleChangeQuery={handleChangeQuery} query={pageInfo.query} />
      <BookList pageInfo={pageInfo} handleChangePage={handleChangePage} />
    </>
  );
};

export default Category;
