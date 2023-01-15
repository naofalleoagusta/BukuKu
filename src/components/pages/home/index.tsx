import { cx } from "class-variance-authority";

import Section from "@/components/ui_palette/Section";
import MarqueeBookList from "./components/MarqueeBookList";

import { logo } from "@/components/ui_palette/Navbar";
import CategoriesList from "./components/CategoriesList";

const Home = () => {
  return (
    <>
      <Section className={cx("bg-gray-900", "py-[120px]")}>
        <h1 className={cx("text-center", "text-zinc-200", "text-3xl sm:text-4xl md:text-5xl")}>
          Find Your Favorite Books <br /> Only on <span className={logo}>BukuKu</span>
        </h1>
      </Section>
      <MarqueeBookList />
      <CategoriesList />
    </>
  );
};

export default Home;
