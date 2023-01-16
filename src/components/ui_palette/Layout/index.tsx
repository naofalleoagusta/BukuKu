import { Outlet } from "react-router-dom";

import DialogBook from "../DialogBook";

import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <DialogBook />
    </>
  );
};

export default Layout;
