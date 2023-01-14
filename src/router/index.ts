import { ExoticComponent, lazy } from "react";

const HomePage = lazy(() => import("@/components/pages/home"));

type RouterType = {
  element: ExoticComponent<unknown>;
  path: string;
};

const routers: RouterType[] = [
  {
    element: HomePage,
    path: "/",
  },
];

export default routers;
