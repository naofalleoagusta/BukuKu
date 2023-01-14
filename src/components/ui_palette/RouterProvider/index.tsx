import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../Layout";

import routers from "@/router";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routers.map((dtRoute, idx) => {
            const Component = dtRoute.element;
            return (
              <Route
                key={`route-${idx}`}
                element={
                  <Suspense fallback={<></>}>
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
