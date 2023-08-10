import React from "react";

export interface RowProps extends React.DetailedHTMLProps<
React.HTMLAttributes<HTMLDivElement>,
HTMLDivElement
>{
  children: React.ReactNode;
  className?: string;
  noGap?: boolean
  gap?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  gapY?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  gapX?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  smGap?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  mdGap?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  lgGap?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  xlGap?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  xxlGap?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  smGapX?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  mdGapX?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  lgGapX?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  xlGapX?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  xxlGapX?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  smGapY?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  mdGapY?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  lgGapY?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  xlGapY?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  xxlGapY?: 5| 10| 15| 20| 25| 30| 40| 50| 75| 100
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}
