import React from 'react';
import { NileColor, NilePosition, NileSize } from '../../types';
export interface AvatarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: NileColor;
    size?: NileSize;
    circle?: boolean;
    className?: string;
    square?: boolean;
    image?: string;
    alt?: string;
    showBadge?: boolean;
    badgeContent?: React.ReactNode;
    badgeColor?: NileColor;
    badgePosition?: NilePosition;
}
