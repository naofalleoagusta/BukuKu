import { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import SearchBanner from "@/components/ui_palette/SearchBanner";

import useFetchCategories from "@/hooks/useFetchCategories";
import useTitle from "@/hooks/useTitle";

type BannerProps = {
  query: string;
  handleChangeQuery: (query: string) => void;
};

const Banner = ({ query, handleChangeQuery }: BannerProps) => {
  const { id } = useParams<{ id: string }>();

  const { data: categories, error } = useFetchCategories();

  const category = useMemo(
    () => categories?.find((category) => category.id === parseInt(id || "0")),
    [categories, id]
  );

  useTitle(`${category?.name || "Category"}`);

  if (error) {
    return <div>Something is wrong</div>;
  }

  if (!categories) {
    return <div>loading</div>;
  }

  return (
    <SearchBanner
      title={category ? category.name : "Category Not Found"}
      query={query}
      handleChangeQuery={handleChangeQuery}
    />
  );
};

export default memo(Banner);
