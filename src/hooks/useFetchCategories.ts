import useFetch from "./useFetch";

import { CATEGORIES_API_URL } from "@/config";
import { CategoryType } from "@/types";

const useFetchCategories = () => {
  const res = useFetch<CategoryType[]>({ url: CATEGORIES_API_URL });
  return res;
};

export default useFetchCategories;
