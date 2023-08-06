import React from 'react';
import { NileVariables } from '../types';
declare const NileThemeProvider: ({ children, theme }: {
    children: React.ReactNode;
    theme?: {
        colors: {
            white: string;
            primary: string;
            secondary: string;
            success: string;
            error: string;
            warning: string;
            info: string;
            dark: string;
        };
        contrastColors: {
            white: string;
            primary: string;
            secondary: string;
            success: string;
            error: string;
            warning: string;
            info: string;
            dark: string;
        };
    } | undefined;
}) => React.JSX.Element;
export default NileThemeProvider;
export declare const useNileTheme: () => {
    colors: {
        white: string;
        primary: string;
        secondary: string;
        success: string;
        error: string;
        warning: string;
        info: string;
        dark: string;
    };
    contrastColors: {
        white: string;
        primary: string;
        secondary: string;
        success: string;
        error: string;
        warning: string;
        info: string;
        dark: string;
    };
};
