import React from 'react'
import { NileColor, NilePosition } from '../../uiTypes'

export interface TooltipProps {
    alwaysActive?: boolean
    children: React.ReactNode
    position?: NilePosition
    color?: NileColor
    content: React.ReactNode
}