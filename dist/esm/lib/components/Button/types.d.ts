import React from 'react';
import { NileColor, NileSize } from "../../types";
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    bordered?: boolean;
    flat?: boolean;
    color?: NileColor;
    size?: NileSize;
    square?: boolean;
    pill?: boolean;
    block?: boolean;
    floating?: boolean;
    noFloat?: boolean;
    link?: boolean;
    loading?: boolean;
}
