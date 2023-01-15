import { Link } from "react-router-dom";
import { cx } from "class-variance-authority";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import Section from "@/components/ui_palette/Section";
import BookList from "../BookList";

import useFetch from "@/hooks/useFetch";

import { CATEGORIES_API_URL } from "@/config";
import { CategoryType } from "@/types";

const CategoriesList = () => {
  const { data: categories, error } = useFetch<CategoryType[]>({ url: CATEGORIES_API_URL });
  if (error) {
    return <div>Something is wrong</div>;
  }
  if (!categories) {
    return <div>loading</div>;
  }
  return categories.length ? (
    <>
      {categories.slice(0, 2).map((category) => (
        <LazyLoadComponent key={category.id}>
          <BookList categoryId={category.id} title={category.name} />
        </LazyLoadComponent>
      ))}
      {categories.length > 2 && (
        <LazyLoadComponent>
          <Section>
            <h2>Browse Other Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3">
              {categories.slice(2).map((category) => (
                <Link
                  to={`/category/${category.id}`}
                  key={category.id}
                  state={{ category }}
                  className={cx([])}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </Section>
        </LazyLoadComponent>
      )}
    </>
  ) : (
    <Section>
      <h2>No Categories Found</h2>
    </Section>
  );
};

export default CategoriesList;
