import clsx from 'clsx';
import { FC, HTMLProps, ReactNode } from 'react';

import styles from '@/styles/components/button.module.scss';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  large?: boolean;
  children: ReactNode;
}

const { button, primary, secondary, tertiary, largeButton } = styles;

const variants = {
  ['primary']: primary,
  ['secondary']: secondary,
  ['tertiary']: tertiary,
};

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  large = false,
}) => {
  return (
    <button className={clsx(button, variants[variant], large && largeButton)}>
      {children}
    </button>
  );
};
