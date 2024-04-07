import React from "react";
import Image from "next/image";

const CustomImage = ({
  alt,
  src,
  className,
  width = 200,
  height = 200,
  ...rest
}) => {
  return (
    <Image
      src={src || "/emptyPicture.png"}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover rounded-t-lg md:rounded-none md:rounded-l-lg h-full w-full ${className}`}
      priority
    />
  );
};

export default CustomImage;
