import { cx } from "class-variance-authority";
import { ReactNode } from "react";

type SectionProps = {
  className?: string;
  children: ReactNode;
  wrapperClassName?: string;
  isBanner?: boolean;
};

const Section = ({ children, className, wrapperClassName, isBanner }: SectionProps) => {
  return (
    <section className={cx(isBanner ? "bg-gray-900 py-[120px] text-white" : "", className)}>
      <div className={cx(["px-4", "max-w-screen-lg", "mx-auto", "lg:px-2", wrapperClassName])}>
        {children}
      </div>
    </section>
  );
};

export default Section;
