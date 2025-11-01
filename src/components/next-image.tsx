import Image, { ImageProps } from 'next/image';
import * as React from 'react';

type NextImageProps = {
  useSkeleton?: boolean;
  classNames?: {
    image?: string;
    blur?: string;
  };
  alt: string;
} & (
  | { width: string | number; height: string | number }
  | { width?: string | number; height?: string | number }
) &
  ImageProps;

/**
 *
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
export default function NextImage({
  useSkeleton = false,
  src,
  width,
  height,
  alt,
  className,
  classNames,
  ...rest
}: NextImageProps) {
  const [status, setStatus] = React.useState(
    useSkeleton ? 'loading' : 'complete',
  );
  const widthIsSet = className?.includes('custom-width') ?? false;

  const imageClassName = (
    (classNames?.image || '') +
    (status === 'loading' ? ` image-loading ${classNames?.blur || ''}` : '')
  ).trim();
  return (
    <figure
      style={widthIsSet ? undefined : { width: `${width}px` }}
      className={className}
    >
      <Image
        className={imageClassName}
        src={src}
        width={width}
        height={height}
        alt={alt}
        placeholder={useSkeleton ? 'blur' : 'empty'}
        onLoad={() => setStatus('complete')}
        {...rest}
      />
    </figure>
  );
}
