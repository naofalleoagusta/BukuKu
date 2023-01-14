import { ExoticComponent, lazy } from "react";

const HomePage = lazy(() => import("@/components/pages/home"));

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
];

export default routers;
