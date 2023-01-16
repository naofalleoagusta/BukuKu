import { cx } from "class-variance-authority";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const logo = cx([
  "text-transparent",
  "font-bold",
  "bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500",
]);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cx([
        "fixed top-0 left-0 z-[10]",
        "w-full h-[70px]",
        "py-4",
        "transition-colors",
        scrolled ? "bg-white shadow-sm" : "bg-gray-900",
      ])}
    >
      <nav
        className={cx([
          "max-w-screen-lg",
          "mx-auto",
          "h-full",
          "flex",
          "flex-row",
          "justify-between",
          "items-center",
          "px-4 lg:px-2",
        ])}
      >
        <Link to="/" className={cx([logo, "text-xl"])}>
          BukuKu
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
