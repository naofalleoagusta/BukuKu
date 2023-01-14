import routers from "@/router";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routers.map((dtRoute) => {
          const Component = dtRoute.element;
          return (
            <Route
              key={dtRoute.path}
              path={dtRoute.path}
              element={
                <Suspense fallback={<></>}>
                  <Component />
                </Suspense>
              }
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
