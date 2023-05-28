import Image from 'next/image';
import { FC } from 'react';

const logoSizes = {
  normal: [46, 30],
  big: [345, 223],
};

type Size = 'normal' | 'big';

const Logo: FC<{ size?: Size; className?: string }> = ({
  size = 'normal',
  className,
}) => {
  return (
    <Image
      src={'/icons/logo.svg'}
      alt="maakay"
      width={logoSizes[size][0]}
      height={logoSizes[size][1]}
      className={className}
    />
  );
};

export default Logo;
