import { cx } from "class-variance-authority";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  XMarkIcon as Close,
  MagnifyingGlassIcon as MagnifyingGlass,
} from "@heroicons/react/24/outline";

import Button from "../Button";
import Section from "../Section";
import Skeleton from "../Skeleton";
import Breadcrumb, { BreadcrumbProps } from "../Breadcrumb";

const iconStyle = cx(
  "text-white group-hover:text-gray-700",
  "absolute top-2 left-2",
  "transition-all duration-500 ease-in-out",
  "w-8 h-8"
);

type SearchBannerProps = {
  title: string;
  query: string;
  handleChangeQuery: (param: string) => void;
  loading?: boolean;
  error?: unknown;
} & BreadcrumbProps;

const SearchBanner = ({
  title,
  query,
  handleChangeQuery,
  loading,
  error,
  breadcrumbs,
}: SearchBannerProps) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [showInput, setShowInput] = useState(false);
  const [isTransition, setIsTransition] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChangeQuery(e.target.value);
  };

  const handleToggleInput = () => {
    if (!showInput && inputEl.current) {
      inputEl.current.focus();
    }
    if (query) {
      handleChangeQuery("");
    }
    setShowInput((prev) => !prev);
    setIsTransition(true);
    setTimeout(() => {
      setIsTransition(false);
    }, 500);
  };

  useEffect(() => {
    if (query && !showInput) {
      setShowInput(true);
    }
  }, []);

  if (error) {
    return (
      <Section isBanner>
        <h1>Something is wrong...</h1>
      </Section>
    );
  }

  if (loading) {
    return (
      <Section isBanner>
        <Skeleton className={cx("h-[40px] w-[75%]")} />
      </Section>
    );
  }

  return (
    <Section isBanner>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <div className="flex items-center gap-2">
        <div className="grow flex items-center">
          <h1
            className={cx(
              !showInput ? "w-full" : "w-0 sm:whitespace-nowrap",
              "transition-all duration-500",
              "overflow-hidden",
              isTransition ? "sm:whitespace-nowrap" : ""
            )}
          >
            {title}
          </h1>
          <input
            className={cx(
              showInput ? "w-full" : "w-0 ",
              "transition-all duration-500",
              "overflow-hidden",
              "h-[48px]",
              "bg-transparent",
              "border-b-2 border-white",
              "outline-none",
              "text-base md:text-xl font-semibold"
            )}
            ref={inputEl}
            onChange={handleOnChange}
            value={query}
          />
        </div>
        <Button
          size="small"
          intent="secondary"
          className="group relative w-[48px] h-[48px] shrink-0"
          onClick={handleToggleInput}
        >
          <Close className={cx(iconStyle, showInput ? "opacity-100" : "opacity-0")} />
          <MagnifyingGlass className={cx(iconStyle, showInput ? "opacity-0" : "opacity-100")} />
        </Button>
      </div>
    </Section>
  );
};

export default SearchBanner;
