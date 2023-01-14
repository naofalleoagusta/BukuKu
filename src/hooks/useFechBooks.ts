import { BOOKS_API_URL } from "@/config";
import { BookType } from "@/types";
import useFetch from "./useFetch";

type UseFetchBooksType = {
  categoryId: number;
  page?: number;
  size?: number;
};

const useFetchBooks = ({ categoryId, page = 0, size = 5 }: UseFetchBooksType) => {
  return useFetch<BookType[]>({
    url: BOOKS_API_URL,
    searchParams: [
      {
        key: "categoryId",
        value: categoryId.toString(),
      },
      ...(page
        ? [
            {
              key: "page",
              value: page.toString(),
            },
          ]
        : []),
      ...(size
        ? [
            {
              key: "size",
              value: size.toString(),
            },
          ]
        : []),
    ],
  });
};

export default useFetchBooks;
