import { FC, HTMLProps, ReactNode, createElement } from 'react';

type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Weight = 'medium' | 'semibold' | 'bold';
type Color = 'almostBlack' | 'almostGray';

const levelClassNames = {
  1: 'text-level-1',
  2: 'text-level-2',
  3: 'text-level-3',
  4: 'text-level-4',
  5: 'text-level-5',
  6: 'text-level-6',
};

type TextProps = HTMLProps<HTMLHeadingElement> & {
  level: Level;
  weight?: Weight;
  children: ReactNode;
  color?: Color;
};

const Text: FC<TextProps> = ({
  children,
  level,
  className,
  weight = 'semibold',
  color = 'almostBlack',
}) => {
  const Tag = level <= 3 ? `h${level}` : 'p';
  const classNames = `${levelClassNames[level]} ${className} font-${weight} text-${color}`;

  return createElement(Tag, { className: classNames }, children);
};

export default Text;
