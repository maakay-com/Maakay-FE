import { FC } from 'react';
import Logo from './Logo';

const Header: FC<{ className?: string }> = ({ className }) => {
  return (
    <header className={`w-full bg-primary py-[25px] px-[100px] ${className}`}>
      <Logo />
    </header>
  );
};

export default Header;
