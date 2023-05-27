import Image, { ImageProps } from 'next/image';
import React, { FC } from 'react';

const Avatar: FC<ImageProps> = ({ src, height = 200, width = 200, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      className="rounded-full"
    />
  );
};

export default Avatar;
