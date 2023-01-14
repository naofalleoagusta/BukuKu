import Section from "@/components/ui_palette/Section";
import { cx } from "class-variance-authority";

type BookListProps = {
  title: string;
};

const BookList = ({ title }: BookListProps) => {
  return (
    <Section className={cx("py-60px")}>
      <h2 className="">{title}</h2>
      <div></div>
    </Section>
  );
};

export default BookList;
