import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { cx } from "class-variance-authority";

import Layout from "../Layout";
import Section from "../Section";
import Skeleton from "../Skeleton";
import ScrollToTop from "../ScrollToTop";

import routers from "@/router";
import Page404 from "@/components/pages/404";

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
                      <>
                        <Section isBanner>
                          <Skeleton className={cx("h-[40px] w-[75%]")} />
                        </Section>
                        <Section>
                          {[...Array(2)].map((_, idx) => (
                            <div key={`skeleton-${idx}`} className="mb-2">
                              <Skeleton className={cx("h-[40px] w-[75%]", "mb-4")} />
                              <Skeleton className={cx("h-[200px] w-full")} />
                            </div>
                          ))}
                        </Section>
                      </>
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

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
