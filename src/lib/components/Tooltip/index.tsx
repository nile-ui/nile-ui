import React from 'react'
import { TooltipProps } from './types'
import classNames from 'classnames'

// FIXME find a proper way for positioning
export default function Tooltip({
  children,
  alwaysActive,
  position,
  color,
  content,
}: TooltipProps) {
  return (
    <div className='inline has-tooltip'>
      {children}
      <div
        className={classNames('tooltip', color, position, {
          'always-active': alwaysActive,
        })}
      >
        {content}
      </div>
    </div>
  )
}
