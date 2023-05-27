import { FC, HTMLProps } from 'react';

type level = 1 | 2 | 3 | 4 | 5 | 6;

const Text: FC<HTMLProps<HTMLHeadingElement> & { level: level }> = ({
  children,
  level,
  className,
}) => {
  const levels = [
    <h1 key={1} className={`text-level-1 font-semibold ${className}`}>
      {children}
    </h1>,
    <h2 key={2} className={`text-level-2 font-bold ${className}`}>
      {children}
    </h2>,
    <h3 key={3} className={`text-level-3 font-bold ${className}`}>
      {children}
    </h3>,
    <p key={4} className={`text-level-4 font-medium ${className}`}>
      {children}
    </p>,
    <p key={5} className={`text-level-5 font-semibold ${className}`}>
      {children}
    </p>,
    <p key={6} className={`text-level-6 font-semibold ${className}`}>
      {children}
    </p>,
  ];

  return levels[level - 1];
};

export default Text;
