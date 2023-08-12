import React from 'react'
import { NileColor, NileDetailedPosition, NileSize } from '../../uiTypes'

export interface AvatarProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: NileColor
    size?: NileSize
    circle?: boolean
    className?: string
    square?: boolean
    image?: string
    alt?: string
    showBadge?: boolean
    badgeContent?: React.ReactNode
    badgeColor?: NileColor
    badgePosition?: NileDetailedPosition
}
