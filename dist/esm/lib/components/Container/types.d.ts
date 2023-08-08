import React from "react";
export interface ContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    fluid?: boolean;
}
