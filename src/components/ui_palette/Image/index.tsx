import { cx } from "class-variance-authority";
import { LazyLoadImage, LazyLoadImageProps } from "react-lazy-load-image-component";

const Image = ({ className, ...props }: LazyLoadImageProps) => {
  return <LazyLoadImage className={cx(["rounded-md", className])} {...props} />;
};

export default Image;
