import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { cx } from "class-variance-authority";

import Layout from "../Layout";
import Section from "../Section";
import Skeleton from "../Skeleton";
import ScrollToTop from "../ScrollToTop";

import routers from "@/router";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {routers.map((dtRoute, idx) => {
            const Component = dtRoute.element;
            return (
              <Route
                key={`route-${idx}`}
                element={
                  <Suspense
                    fallback={
                      <Section isBanner>
                        <Skeleton className={cx("h-[40px] w-[75%]")} />
                      </Section>
                    }
                  >
                    <Component />
                  </Suspense>
                }
                path={dtRoute.path}
                index={dtRoute.index}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
