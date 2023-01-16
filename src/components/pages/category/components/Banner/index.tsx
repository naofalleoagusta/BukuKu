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

  return (
    <SearchBanner
      title={category ? category.name : "Category Not Found"}
      query={query}
      handleChangeQuery={handleChangeQuery}
      loading={!categories}
      error={error}
      breadcrumbs={[
        {
          text: "Home",
          path: `/`,
        },
        {
          text: category?.name || "Category",
          path: "",
        },
      ]}
    />
  );
};

export default memo(Banner);
