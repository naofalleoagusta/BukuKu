import { cx } from "class-variance-authority";

import Section from "@/components/ui_palette/Section";

import BookList from "./components/BookList";
import MarqueeBookList from "./components/MarqueeBookList";

import useFetch from "@/hooks/useFetch";

import { CATEGORIES_API_URL } from "@/config";
import { logo } from "@/components/ui_palette/Navbar";

const Home = () => {
  // const { data, error, loading } = useFetch({ url: CATEGORIES_API_URL });
  // console.log(data);
  return (
    <>
      <Section className={cx("bg-gray-900", "py-[120px]")}>
        <h1 className={cx("text-center", "text-zinc-200")}>
          Find Your Favorite Books <br /> Only on <span className={logo}>BukuKu</span>
        </h1>
      </Section>
      <MarqueeBookList />
      <BookList title="" />
    </>
  );
};

export default Home;
