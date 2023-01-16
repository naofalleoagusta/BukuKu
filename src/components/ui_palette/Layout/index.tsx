import { Outlet } from "react-router-dom";

import DialogBook from "../DialogBook";
import Footer from "../Footer";

import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <DialogBook />
      <Footer />
    </>
  );
};

export default Layout;
