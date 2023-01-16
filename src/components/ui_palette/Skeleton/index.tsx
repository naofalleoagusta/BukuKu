import { cva, VariantProps } from "class-variance-authority";

const skeletonStyle = cva("animate-pulse bg-gray-200", {
  variants: {
    shape: {
      circle: ["rounded-full"],
      square: ["rounded-md"],
    },
  },
  compoundVariants: [{ shape: "square" }],
  defaultVariants: { shape: "square" },
});

type SkeletonProps = VariantProps<typeof skeletonStyle> & {
  width?: string | number;
  height?: string | number;
  className?: string;
};

const Skeleton = ({ shape, className = "w-[80px] h-[40px]" }: SkeletonProps) => {
  return <div className={skeletonStyle({ className, shape })} />;
};

export default Skeleton;
