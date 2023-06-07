import Link from 'next/link';
import type { FC, HTMLProps } from 'react';

type variant = 'primary' | 'secondary';
type size = 'small' | 'medium' | 'full';
const types = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
};

const sizes = {
  small: 'max-w-[200px] w-full py-[14px]',
  medium: 'max-w-[300px] w-full py-[19px]',
  full: 'w-full',
};

type ButtonProps = {
  variant?: variant;
  buttonSize?: size;
  to?: string | undefined;
  disabled?: boolean;
};

const Button: FC<HTMLProps<HTMLButtonElement> & ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
  buttonSize = 'small',
  to = undefined,
  className,
  disabled = false
}) => {
  const classes = `text-level-6 font-bold px-[20px] min-w-[100px] rounded-md py-[19px] w-full shadow-sm disabled:opacity-80 ${types[variant]} ${sizes[buttonSize]} ${className}`;

  if (to !== undefined)
    return (
      <Link href={to} className={classes}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
