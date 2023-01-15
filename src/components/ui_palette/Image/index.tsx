import { cx } from "class-variance-authority";
import { LazyLoadImage, LazyLoadImageProps } from "react-lazy-load-image-component";

type ImageProps = LazyLoadImageProps & {
  lazy?: boolean;
};

const Image = ({ className, lazy = true, src, alt, width, height, ...props }: ImageProps) => {
  return lazy ? (
    <LazyLoadImage
      className={cx(["rounded-md", className])}
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholderSrc={src}
      {...props}
    />
  ) : (
    <img
      className={cx(["rounded-md", className])}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Image;
