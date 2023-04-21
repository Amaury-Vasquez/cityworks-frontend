import clsx from 'clsx';
import { FC, HTMLProps } from 'react';
import styles from '@/styles/components/image.module.scss';

interface ImageProps extends HTMLProps<HTMLImageElement> {
  caption?: string;
}

export const Image: FC<ImageProps> = ({
  src,
  alt,
  className,
  caption,
  ...props
}) => (
  <div className={clsx(styles.image, className)}>
    <img src={src} alt={alt} {...props} />
    {caption && <caption>{caption}</caption>}
  </div>
);
