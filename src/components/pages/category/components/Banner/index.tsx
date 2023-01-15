import { ChangeEvent, memo, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { cx } from "class-variance-authority";

import Section from "@/components/ui_palette/Section";
import Button from "@/components/ui_palette/Button";
import { Close, MagnifyingGlass } from "@/components/icons";

import useFetchCategories from "@/hooks/useFetchCategories";

const iconStyle = cx(
  "text-white group-hover:text-gray-700",
  "absolute top-2 left-2",
  "transition-all duration-500 ease-in-out"
);

type BannerProps = {
  query: string;
  handleChangeQuery: (query: string) => void;
};

const Banner = ({ query, handleChangeQuery }: BannerProps) => {
  const { id } = useParams<{ id: string }>();
  const [showInput, setShowInput] = useState(false);
  const [isTransition, setIsTransition] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);

  const { data: categories, error } = useFetchCategories();

  const category = useMemo(
    () => categories?.find((category) => category.id === parseInt(id || "0")),
    [categories, id]
  );

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
    return <div>Something is wrong</div>;
  }

  if (!categories) {
    return <div>loading</div>;
  }

  return (
    <Section isBanner>
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
            {category ? category.name : "Category Not Found"}
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
          <Close size="large" className={cx(iconStyle, showInput ? "opacity-100" : "opacity-0")} />
          <MagnifyingGlass
            size="large"
            className={cx(iconStyle, showInput ? "opacity-0" : "opacity-100")}
          />
        </Button>
      </div>
    </Section>
  );
};

export default memo(Banner);
