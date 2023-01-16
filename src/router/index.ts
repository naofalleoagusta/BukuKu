import { ExoticComponent, lazy } from "react";

const HomePage = lazy(() => import("@/components/pages/home"));
const CategoryPage = lazy(() => import("@/components/pages/category"));
const BookmarkPage = lazy(() => import("@/components/pages/bookmark"));

type RouterType = {
  element: ExoticComponent<unknown>;
  path?: string;
  index?: boolean;
};

const routers: RouterType[] = [
  {
    element: HomePage,
    index: true,
  },
  {
    element: CategoryPage,
    path: "category/:id",
  },
  {
    element: BookmarkPage,
    path: "bookmark",
  },
];

export default routers;
