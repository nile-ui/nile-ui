import React from 'react'
import { TagProps } from './types'
import classNames from 'classnames'

// TODO Tag Group
export default function Tag({
  children,
  color,
  size,
  flat,
  hasClose,
  onClose,
  className,
  ...otherProps
}: TagProps) {
  return (
    <span
      className={classNames('tag', size, color, { flat: flat }, className)}
      {...otherProps}
    >
      {children}
      {hasClose && <button className='close' onClick={onClose}></button>}
    </span>
  )
}
