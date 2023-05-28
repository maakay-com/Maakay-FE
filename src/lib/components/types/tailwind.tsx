export type FontLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type FontWeight = 'font-medium' | 'font-semibold' | 'font-bold';
export type TextColor =
  | 'text-almostBlack'
  | 'text-almostGray'
  | 'text-primary'
  | 'text-secondary'
  | 'text-primaryLight'
  | 'text-white';
export const levelClassNames = {
  1: 'text-level-1',
  2: 'text-level-2',
  3: 'text-level-3',
  4: 'text-level-4',
  5: 'text-level-5',
  6: 'text-level-6',
};
