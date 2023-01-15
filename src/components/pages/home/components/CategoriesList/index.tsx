import { Link } from "react-router-dom";
import { cx } from "class-variance-authority";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import Section from "@/components/ui_palette/Section";
import BookList from "../BookList";

import useFetchCategories from "@/hooks/useFetchCategories";

const categoryCardClasses = [
  "from-cyan-500 to-blue-500",
  "from-fuchsia-500 to-cyan-500",
  "from-slate-900 to-slate-700",
];

const CategoriesList = () => {
  const { data: categories, error } = useFetchCategories();
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
            <div
              className={cx("grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4", "mt-6 md:mt-8 mb-4")}
            >
              {categories.slice(2).map((category, idx) => (
                <Link
                  to={`/category/${category.id}`}
                  key={category.id}
                  className={cx(
                    "p-4",
                    "rounded-md",
                    "bg-gradient-to-r",
                    "text-white font-semibold text-sm md:text-xl",
                    categoryCardClasses[idx % 3]
                  )}
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
