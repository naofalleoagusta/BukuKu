import { cx } from "class-variance-authority";
import { ReactNode } from "react";

type SectionProps = {
  className?: string;
  children: ReactNode;
};

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={className}>
      <div className={cx(["px-4", "max-w-screen-lg", "mx-auto", "lg:px-0"])}>{children}</div>
    </section>
  );
};

export default Section;
