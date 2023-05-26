import { FC, HTMLProps } from 'react';

type level = 1 | 2 | 3 | 4 | 5 | 6;

const Text: FC<HTMLProps<HTMLHeadingElement> & { level: level }> = ({
  children,
  level,
}) => {
  const levels = [
    <h1 key={1} className="text-level-1 font-semibold">
      {children}
    </h1>,
    <h2 key={2} className="text-level-2 font-bold">
      {children}
    </h2>,
    <h3 key={3} className="text-level-3 font-bold">
      {children}
    </h3>,
    <p key={4} className="text-level-4 font-semibold">
      {children}
    </p>,
    <p key={5} className="text-level-5 font-semibold">
      {children}
    </p>,
    <p key={6} className="text-level-6 font-semibold">
      {children}
    </p>,
  ];

  return levels[level - 1];
};

export default Text;
