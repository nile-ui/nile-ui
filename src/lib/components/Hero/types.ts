import React from 'react'
import { NileColor, NileSize } from '../../uiTypes'

export interface HeroProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: NileColor
    size?: NileSize
    halfScreen?: boolean
    fullScreen?: boolean
    fullScreenWithNavbar?: boolean
    className?: string
}
