import { FC, HTMLProps, ReactNode, createElement } from 'react';
import {
  FontLevel,
  TextColor,
  levelClassNames,
  FontWeight,
} from './types/tailwind';

type TextProps = HTMLProps<HTMLHeadingElement> & {
  level: FontLevel;
  weight?: FontWeight;
  children: ReactNode;
  color?: TextColor;
};

const Text: FC<TextProps> = ({
  children,
  level,
  className,
  weight = 'font-medium',
  color = 'almostBlack',
}) => {
  const Tag = level <= 3 ? `h${level}` : 'p';
  const classNames = `${levelClassNames[level]} ${className} ${weight} ${color}`;

  return createElement(Tag, { className: classNames }, children);
};

export default Text;
