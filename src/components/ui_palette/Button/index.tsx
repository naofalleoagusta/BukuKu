import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const buttonStyle = cva("rounded-md transition-all duration-500 font-semibold", {
  variants: {
    intent: {
      primary: ["bg-gray-700 hover:bg-slate-800", "text-white whitespace-nowrap"],
      secondary: ["bg-transparent", "text-gray-800", "hover:bg-slate-200"],
      danger: ["bg-red-600 hover:bg-red-700", "text-white"],
    },
    size: {
      small: ["text-xs sm:text-sm", "py-2", "px-2"],
      medium: ["text-sm sm:text-base", "py-2", "px-4"],
      large: ["text-base sm:text-lg", "py-3", "px-6"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyle> & {
    fullWidth?: boolean;
  };

const Button = ({
  className,
  children,
  intent,
  size,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonStyle({
        intent,
        size,
        className: `${className} ${fullWidth ? "w-full" : ""}`,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
