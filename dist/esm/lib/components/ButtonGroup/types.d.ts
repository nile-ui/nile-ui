import React from "react";
import { ButtonProps } from "../Button/types";
export interface ButtonGroupProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: Array<React.ReactElement<ButtonProps>>;
    className?: string;
    fluid?: boolean;
}
