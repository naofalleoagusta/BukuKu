import { cva, VariantProps } from "class-variance-authority";

const iconStyles = cva("", {
  variants: {
    size: {
      small: ["w-4", "h-4"],
      medium: ["w-6", "h-6"],
      large: ["w-8", "h-8"],
    },
  },
  compoundVariants: [{ size: "medium" }],
  defaultVariants: {
    size: "medium",
  },
});

export type IconProps = VariantProps<typeof iconStyles> & {
  className?: string;
};

export default iconStyles;
