import { cx } from "class-variance-authority";

import Section from "@/components/ui_palette/Section";
import MarqueeBookList from "./components/MarqueeBookList";
import CategoriesList from "./components/CategoriesList";
import BookmarkList from "./components/BookmarkList";

import useTitle from "@/hooks/useTitle";

import { logo } from "@/components/ui_palette/Navbar";

const Home = () => {
  useTitle("Home");

  return (
    <>
      <Section isBanner>
        <h1 className={cx("text-center", "text-zinc-200", "text-3xl sm:text-4xl md:text-5xl")}>
          Find Your Favorite Books <br /> Only on <span className={logo}>BukuKu</span>
        </h1>
      </Section>
      <MarqueeBookList />
      <BookmarkList />
      <CategoriesList />
    </>
  );
};

export default Home;
