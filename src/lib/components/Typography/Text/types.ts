import React from "react";
import { NileTextColor } from "../../../types";

export type TextComponentProps = {
    fontSize?: 1 | 2 | 3 | 4 | 5 | 6
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
    textAlign?: 'left' | 'right' | 'center'
    underline?: boolean
    lineThrough?: boolean
    italic?: boolean
    lowercase?: boolean
    uppercase?: boolean
    capitalize?: boolean
    truncate?: boolean
    wrap?: boolean
    nowrap?: boolean
    break?: boolean
    lineHeight?: 1 | 'sm' | 'base' | 'lg'
    color?: NileTextColor
    children: React.ReactNode
    className?: string
}

export type TextProps = Omit<React.DetailedHTMLProps<
React.HTMLAttributes<HTMLHeadingElement>,
HTMLHeadingElement
>, 'wrap'> & TextComponentProps;
