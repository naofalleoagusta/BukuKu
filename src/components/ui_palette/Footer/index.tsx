import { cx } from "class-variance-authority";

const Footer = () => {
  return (
    <footer className={cx("bg-gray-800", "mt-10 py-10 md:py-20 px-4", "md:text-center text-white")}>
      <div className="max-w-screen-lg mx-auto">
        <span>Made with 💖 on React.JS, Tailwind, and Vite.JS</span>
      </div>
    </footer>
  );
};

export default Footer;
