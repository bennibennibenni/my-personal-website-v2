'use client';

import Image, { ImageProps, StaticImageData } from 'next/image';
import * as React from 'react';

type NextImageProps = {
  useSkeleton?: boolean;
  classNames?: {
    image?: string;
    blur?: string;
    skeleton?: string;
  };
  alt: string;
} & (
  | { width: string | number; height: string | number }
  | { width?: string | number; height?: string | number }
) &
  Omit<ImageProps, 'src'> & {
    src: string | StaticImageData;
  };

export default function NextImage({
  useSkeleton = true,
  src,
  width,
  height,
  alt,
  className,
  classNames,
  style,
  ...rest
}: NextImageProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const widthStyle = width
    ? typeof width === 'number'
      ? `${width}px`
      : width
    : undefined;
  const heightStyle = height
    ? typeof height === 'number'
      ? `${height}px`
      : height
    : undefined;

  const imageProps = {
    src,
    ...(width !== undefined ? { width: Number(width) || undefined } : {}),
    ...(height !== undefined ? { height: Number(height) || undefined } : {}),
    ...rest,
  };

  return (
    <figure
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: widthStyle,
        height: heightStyle,
        ...style,
      }}
      className={`next-image-container ${
        useSkeleton && !isLoaded ? 'skeleton-loading' : ''
      } ${className || ''}`.trim()}
    >
      {useSkeleton && !isLoaded && (
        <div
          className={`image-skeleton ${classNames?.skeleton || ''}`.trim()}
          aria-hidden='true'
        />
      )}
      <Image
        alt={alt}
        className={`next-image ${
          isLoaded ? 'image-loaded' : 'image-loading'
        } ${classNames?.image || ''}`.trim()}
        onLoad={() => setIsLoaded(true)}
        {...imageProps}
      />
    </figure>
  );
}
